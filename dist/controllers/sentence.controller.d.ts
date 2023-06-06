import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Sentence } from '../models';
import { SentenceRepository } from '../repositories';
export declare class SentenceController {
    sentenceRepository: SentenceRepository;
    constructor(sentenceRepository: SentenceRepository);
    create(sentence: Omit<Sentence, 'SentenceId'>): Promise<Sentence>;
    count(where?: Where<Sentence>): Promise<Count>;
    find(filter?: Filter<Sentence>): Promise<Sentence[]>;
    updateAll(sentence: Sentence, where?: Where<Sentence>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Sentence>): Promise<Sentence>;
    updateById(id: string, sentence: Sentence): Promise<void>;
    replaceById(id: string, sentence: Sentence): Promise<void>;
    deleteById(id: string): Promise<void>;
}
