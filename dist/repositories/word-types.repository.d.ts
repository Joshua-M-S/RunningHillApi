import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { WordTypes, WordTypesRelations, Words } from '../models';
import { WordsRepository } from './words.repository';
export declare class WordTypesRepository extends DefaultCrudRepository<WordTypes, typeof WordTypes.prototype.id, WordTypesRelations> {
    protected wordsRepositoryGetter: Getter<WordsRepository>;
    readonly words: HasManyRepositoryFactory<Words, typeof WordTypes.prototype.id>;
    constructor(dataSource: DbDataSource, wordsRepositoryGetter: Getter<WordsRepository>);
}
