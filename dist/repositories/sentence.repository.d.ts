import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Sentence, SentenceRelations } from '../models';
export declare class SentenceRepository extends DefaultCrudRepository<Sentence, typeof Sentence.prototype.SentenceId, SentenceRelations> {
    constructor(dataSource: DbDataSource);
}
