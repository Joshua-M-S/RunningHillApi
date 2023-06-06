import { Entity } from '@loopback/repository';
export declare class Sentence extends Entity {
    Sentence?: string;
    SentenceId: string;
    constructor(data?: Partial<Sentence>);
}
export interface SentenceRelations {
}
