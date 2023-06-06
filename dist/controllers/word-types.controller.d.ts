import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { WordTypes } from '../models';
import { WordTypesRepository } from '../repositories';
export declare class WordTypesController {
    wordTypesRepository: WordTypesRepository;
    constructor(wordTypesRepository: WordTypesRepository);
    create(wordTypes: WordTypes): Promise<WordTypes>;
    count(where?: Where<WordTypes>): Promise<Count>;
    find(filter?: Filter<WordTypes>): Promise<WordTypes[]>;
    updateAll(wordTypes: WordTypes, where?: Where<WordTypes>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<WordTypes>): Promise<WordTypes>;
    updateById(id: string, wordTypes: WordTypes): Promise<void>;
    replaceById(id: string, wordTypes: WordTypes): Promise<void>;
    deleteById(id: string): Promise<void>;
}
