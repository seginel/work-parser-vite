// it's required to omit [index: string] from keyof

type MapKnownKeys<T> = {
    [K in keyof T as string extends K
        ? never
        : number extends K
        ? never
        : K]: string;
};

export type CSSKeysWithoutIndex = Exclude<
    keyof MapKnownKeys<CSSStyleDeclaration>,
    | 'getPropertyPriority'
    | 'getPropertyValue'
    | 'item'
    | 'removeProperty'
    | 'setProperty'
    | 'parentRule'
    | typeof Symbol.iterator
>;

export interface BriefCondition {
    selector: string;
    css?: Partial<Record<CSSKeysWithoutIndex, string>>;
    comment?: string;
    count?: number;
}
