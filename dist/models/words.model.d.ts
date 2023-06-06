import { Entity } from '@loopback/repository';
export declare class Words extends Entity {
    id?: string;
    Word?: string;
    wordTypesId?: string;
    constructor(data?: Partial<Words>);
}
export interface WordsRelations {
}
export type WordsWithRelations = Words & WordsRelations;
