import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Words, WordsRelations } from '../models';
export declare class WordsRepository extends DefaultCrudRepository<Words, typeof Words.prototype.Word, WordsRelations> {
    constructor(dataSource: DbDataSource);
}
