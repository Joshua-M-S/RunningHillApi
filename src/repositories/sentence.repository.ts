import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Sentence, SentenceRelations} from '../models';

export class SentenceRepository extends DefaultCrudRepository<
  Sentence,
  typeof Sentence.prototype.SentenceId,
  SentenceRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Sentence, dataSource);
  }
}
