import { CollectionKey, WorkKey } from '../../types/idb';
import { FC, useState } from 'react';
import JSZip from 'jszip';
import { useUnzipContent } from '../../hooks/useUnzipContent';
import { useDbContainsImages } from '../../hooks/useDbContainsImages';
import { ScreenshotGenerator } from '../ScreenshotGenerator/ScreenshotGenerator';
import { ZipParser } from '../ZipParser/ZipParser';
import { BriefChecker } from '../BriefChecker/BriefChecker';
import { HtmlValidation } from '../HtmlValidation/HtmlValiidation';
import { BemValidation } from '../BemValidation/BemValidation';
import { FilesExistingChecker } from '../FilesExistingChecker/FilesExistingChecker';
import { SectionChecker } from '../SectionChecker/SectionChecker';
import { BriefCondition } from '../../types/BriefCondtition';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { DEV_MIX } from '../../templates/common';
import { ScreenshotMatch } from '../ScreenshotMatch/ScreenshotMatch';
import { idb } from '../../hooks/useIdb';
import { getFileKey } from '../../utils/idb.utils';
import { IframeSize } from '../../constants/iframe.constants';

interface Props {
    workKey: WorkKey;
    classList: string[];
    fileList: string[];
    cssFileMask: string;
    brief: BriefCondition[];
    title: string;
    templateFileName: string;
}

export const WorkChecker: FC<Props> = ({
    workKey,
    classList,
    fileList,
    cssFileMask,
    templateFileName,
    brief,
    title,
}) => {
    const [work, setWork] = useState<JSZip | null>(null);
    const { html, css } = useUnzipContent(work, cssFileMask);
    const [trigger, setTrigger] = useState(0);

    const { contains, loading } = useDbContainsImages(
        workKey,
        classList,
        trigger,
    );

    const handleReset = async () => {
        await Promise.all(
            classList
                .map((item) => [
                    getFileKey(workKey, item, IframeSize.min),
                    getFileKey(workKey, item, IframeSize.max),
                ])
                .flat()
                .map((key) => idb.delete(CollectionKey.images, key)),
        );

        setTrigger(Date.now());
    };

    if (!loading && !contains) {
        return (
            <ScreenshotGenerator
                title={`Генерация картинок ${title}`}
                classList={classList}
                workKey={workKey}
                onComplete={() => setTrigger(Date.now())}
                cssFileMask={cssFileMask}
                templateFileName={templateFileName}
            />
        );
    }

    const content = !work ? (
        <>
            <ZipParser onWorkLoad={setWork} />
            <button
                onClick={handleReset}
                style={{ fontSize: '10px', marginTop: '10px' }}
            >
                ♻️ Сбросить сгенерированные картинки
            </button>
        </>
    ) : (
        <>
            <BriefChecker html={html} css={css} conditions={brief} />
            <HtmlValidation html={html} />
            <BemValidation html={html} />
            <FilesExistingChecker zip={work} fileList={fileList} />
            <SectionChecker html={html} sectionList={classList} />
            <ScreenshotMatch
                html={getBodyFromHtmlWithStyle(html, css, DEV_MIX)}
                classNames={classList}
                workKey={workKey}
            />
        </>
    );

    return (
        <section>
            <h1>
                {title}{' '}
                {work && (
                    <span
                        style={{ cursor: 'pointer' }}
                        onClick={() => setWork(null)}
                    >
                        🪣
                    </span>
                )}
            </h1>
            {content}
        </section>
    );
};
