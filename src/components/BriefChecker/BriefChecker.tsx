import { FC, useEffect, useRef, useState } from 'react';
import { BriefCondition } from '../../types/BriefCondtition';
import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { Collapse } from '../Collapse/Collapse';
import { IframeSrcDoc } from '../IframeSrcDoc/IframeSrcDoc';
import { IframeSize } from '../../constants/iframe.constants';
import { getKeys } from '../../utils/get-keys.utils';
import { delay } from '../../utils/delay.utils';
import { getRgbFromHex } from '../../utils/hex-to-rgb.utils';
import { uniqId } from '../../utils/uniq-id.utils';

interface Props {
    html?: string;
    css?: string;
    conditions: BriefCondition[];
}

interface BriefConditionValidation extends BriefCondition {
    errors: JSX.Element[];
}

const IFRAME_WIDTH = IframeSize.max;

export const BriefChecker: FC<Props> = ({ html, css, conditions }) => {
    const [state, setState] = useState<BriefConditionValidation[]>([]);
    const [done, setDone] = useState(false);
    const ref = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        async function calculate() {
            await delay(1000);

            if (!html || !css || !ref.current || done) {
                return;
            }

            const result = conditions.map((condition) => {
                const { selector, css: rules = {}, count } = condition;

                const contentWindow = ref.current?.contentWindow!;

                const element = contentWindow.document.querySelector(selector);

                if (!element) {
                    return {
                        ...condition,
                        errors: [<div key={uniqId()}>Элемент не найден</div>],
                    };
                }

                const errors: JSX.Element[] = [];

                if (count) {
                    const nodes =
                        contentWindow.document.querySelectorAll(selector);

                    if (nodes.length !== count) {
                        errors.push(
                            <div key={uniqId()}>
                                Количество элементов ({nodes.length}) не
                                совпадает ожидаемому ({count})
                            </div>,
                        );
                    }
                }

                const styles = contentWindow.getComputedStyle(element);

                getKeys(rules).forEach((key, index) => {
                    const target = styles[key];
                    const template = rules[key]!;

                    switch (key) {
                        case 'top':
                        case 'bottom':
                        case 'left':
                        case 'right':
                            if (!isEqualTwoNumericProperty(target, template)) {
                                errors.push(
                                    <div key={uniqId()}>
                                        Значение свойства <b>{key}</b> равное{' '}
                                        <u>{target}</u> не соответствует
                                        ожидаемому <u>{template}</u>
                                    </div>,
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
                                    <div key={uniqId()}>
                                        Значение свойства <b>{key}</b> равное{' '}
                                        <u>{target}</u> не соответствует
                                        ожидаемому <u>{template}</u>
                                    </div>,
                                );
                            }
                            break;
                        case 'width':
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
                                        <div key={uniqId()}>
                                            Значение свойства <b>{key}</b>{' '}
                                            равное <u>{target}</u> не
                                            соответствует ожидаемому{' '}
                                            <u>{template}</u> в пересчёте из
                                            процентов (${calculatedWidth})
                                        </div>,
                                    );
                                }

                                return;
                            }
                            if (!isEqualTwoNumericProperty(target, template)) {
                                errors.push(
                                    <div key={uniqId()}>
                                        Значение свойства <b>{key}</b> равное{' '}
                                        <u>{target}</u> не соответствует
                                        ожидаемому <u>{template}</u>
                                    </div>,
                                );
                            }

                            return;
                        case 'color':
                        case 'backgroundColor':
                            if (getRgbFromHex(template) !== target) {
                                errors.push(
                                    <div key={uniqId()}>
                                        Значение свойства <b>{key}</b> равное{' '}
                                        <u>{target}</u> не соответствует
                                        ожидаемому <u>{template}</u> (
                                        {getRgbFromHex(template)})
                                    </div>,
                                );
                            }
                            return;

                        default:
                            if (target !== template) {
                                errors.push(
                                    <div key={uniqId()}>
                                        Значение свойства <b>{key}</b> равное{' '}
                                        <u>{target}</u> не соответствует
                                        ожидаемому <u>{template}</u>
                                    </div>,
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
    }, [html, css, conditions, ref.current, done]);

    const invalid = state.filter(({ errors }) => !!errors.length);

    if (!html || !css) {
        return null;
    }

    return (
        <>
            <Collapse title={'Бриф'} valid={!invalid.length}>
                {state.map(({ errors, selector, css: rules }, index) => (
                    <Collapse
                        title={selector}
                        valid={!errors.length}
                        size={4}
                        initialCollapsed={false}
                        key={selector}
                    >
                        {errors}
                        {rules && (
                            <Collapse
                                title={'Проверки css'}
                                size={5}
                                valid={!errors.length}
                            >
                                {Object.entries(rules).map(
                                    ([rule, value], index) => (
                                        <div
                                            key={`${selector}-${rule}-${index}`}
                                        >
                                            <b>{rule}</b>: <u>{value}</u>
                                        </div>
                                    ),
                                )}
                            </Collapse>
                        )}
                    </Collapse>
                ))}
            </Collapse>
            {!done && (
                <IframeSrcDoc
                    width={IframeSize.max}
                    html={getBodyFromHtmlWithStyle(html, css)}
                    ref={ref}
                />
            )}
        </>
    );
};
