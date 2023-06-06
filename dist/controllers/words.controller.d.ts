import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Words } from '../models';
import { WordsRepository } from '../repositories';
export declare class WordsController {
    wordsRepository: WordsRepository;
    constructor(wordsRepository: WordsRepository);
    create(words: Omit<Words, 'Word'>): Promise<Words>;
    count(where?: Where<Words>): Promise<Count>;
    find(filter?: Filter<Words>): Promise<Words[]>;
    updateAll(words: Words, where?: Where<Words>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Words>): Promise<Words>;
    updateById(id: string, words: Words): Promise<void>;
    replaceById(id: string, words: Words): Promise<void>;
    deleteById(id: string): Promise<void>;
}
