import type { CustomElement, InternalCustomElement } from '../common/types';

export interface CustomPage extends CustomElement {
    entity: string;
    navigation?: {
        sourcePage: string;
        sourceEntity: string;
        navEntity: string;
    };
    view?: {
        title?: string;
        path?: string;
    };
    list?: boolean;
}

export type InternalCustomPage = CustomPage &
    InternalCustomElement & {
        fcl: boolean;
        controlAggregation?: 'beginColumnPages' | 'midColumnPages' | 'endColumnPages';
    };
