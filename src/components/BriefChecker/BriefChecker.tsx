import { FC, useEffect, useRef, useState } from 'react';
import {
    BriefCondition,
} from '../../types/BriefCondtition';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { Collapse } from '../Collapse/Collapse';
import { IframeSrcDoc } from '../IframeSrcDoc/IframeSrcDoc';
import { IframeSize } from '../../constants/iframe.constants';
import { getKeys } from '../../utils/get-keys.utils';
import { delay } from '../../utils/delay.utils';

interface Props {
    html?: string;
    css?: string;
    conditions: BriefCondition[];
}

interface BriefConditionValidation extends BriefCondition {
    errors: string[];
}

const IFRAME_WIDTH = IframeSize.max;

export const BriefChecker: FC<Props> = ({ html, css, conditions }) => {
    const [state, setState] = useState<BriefConditionValidation[]>([]);
    const [done, setDone] = useState(false);
    const ref = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        async function calculate() {
            if (!html || !css || !ref.current) {
                return;
            }

            await delay(1000);

            const result = conditions.map((condition) => {
                const { selector, css: rules = {}, count } = condition;

                const contentWindow = ref.current?.contentWindow!;

                const element = contentWindow.document.querySelector(selector);

                if (!element) {
                    return { ...condition, errors: ['Элемент не найден'] };
                }

                const styles = contentWindow.getComputedStyle(element);

                const errors: string[] = [];

                getKeys(rules).forEach((key) => {
                    const target = styles[key];
                    const template = rules[key]!;

                    switch (key) {
                        case 'top':
                        case 'bottom':
                        case 'left':
                        case 'right':
                            if (!isEqualTwoNumericProperty(target, template)) {
                                errors.push(
                                    `Значение свойства ${key.toString()} равное ${target} не соответствует ожидаемому ${template}`,
                                );
                            }
                            break;
                        case 'lineHeight':
                            const lineHeightTemplateValue = template.includes(
                                'px',
                            )
                                ? template
                                : `${
                                      parseInt(String(rules.fontSize), 10) *
                                      parseFloat(template)
                                  }px`;

                            if (
                                !isEqualTwoNumericProperty(
                                    target,
                                    lineHeightTemplateValue,
                                )
                            ) {
                                errors.push(
                                    `Значение свойства ${key.toString()} равное ${target} не соответствует ожидаемому ${lineHeightTemplateValue}`,
                                );
                            }
                            break;
                        case 'width':
                            if (template === '60%') {
                                // debugger;/**/
                            }

                            if (template.includes('%')) {
                                const calculatedWidth =
                                    (parseInt(template, 10) * IFRAME_WIDTH) /
                                    100;

                                if (
                                    !isEqualTwoNumericProperty(
                                        calculatedWidth,
                                        target,
                                    )
                                ) {
                                    errors.push(
                                        `Значение свойства ${key.toString()} равное ${target} не соответствует ожидаемому ${template} в пересчёте из процентов (${calculatedWidth})`,
                                    );
                                }

                                return;
                            }
                            if (!isEqualTwoNumericProperty(target, template)) {
                                errors.push(
                                    `Значение свойства ${key.toString()} равное ${target} не соответствует ожидаемому ${template}`,
                                );
                            }

                            return;
                        default:
                            if (target !== template) {
                                errors.push(
                                    `Значение свойства ${key.toString()} равное ${target} не соответствует ожидаемому ${template}`,
                                );
                            }
                    }
                });

                return { ...condition, errors };
            });

            setState(result);
            setDone(true);

            function isEqualTwoNumericProperty(
                left: number | string,
                right: number | string,
            ) {
                return (
                    parseInt(String(left), 10) === parseInt(String(right), 10)
                );
            }
        }

        calculate();
    }, [html, css, conditions, ref.current]);

    const invalid = state.filter(({ errors }) => !!errors.length);

    if (!html || !css) {
        return null;
    }

    return (
        <>
            {!done && (
                <IframeSrcDoc
                    width={IframeSize.max}
                    html={getBodyFromHtmlWithStyle(html, css)}
                    ref={ref}
                />
            )}

            <Collapse title={'Бриф'} valid={!invalid.length}>
                {state.map(({ errors, selector }) => (
                    <div>
                        <div>
                            <b>{selector}</b>
                        </div>
                        <div>{errors.join(', ')}</div>
                    </div>
                ))}
            </Collapse>
        </>
    );
};
