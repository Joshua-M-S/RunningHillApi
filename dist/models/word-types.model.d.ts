import { Entity } from '@loopback/repository';
import { Words } from './words.model';
export declare class WordTypes extends Entity {
    id?: string;
    Types: string;
    words: Words[];
    constructor(data?: Partial<WordTypes>);
}
export interface WordTypesRelations {
}
export type WordTypesWithRelations = WordTypes & WordTypesRelations;
