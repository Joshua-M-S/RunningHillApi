import { Count, Filter, Where } from '@loopback/repository';
import { WordTypes, Words } from '../models';
import { WordTypesRepository } from '../repositories';
export declare class WordTypesWordsController {
    protected wordTypesRepository: WordTypesRepository;
    constructor(wordTypesRepository: WordTypesRepository);
    find(id: string, filter?: Filter<Words>): Promise<Words[]>;
    create(id: typeof WordTypes.prototype.id, words: Omit<Words, 'Word'>): Promise<Words>;
    patch(id: string, words: Partial<Words>, where?: Where<Words>): Promise<Count>;
    delete(id: string, where?: Where<Words>): Promise<Count>;
}
