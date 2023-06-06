import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import { Words, WordsRelations } from '../models';

export class WordsRepository extends DefaultCrudRepository<
  Words,
  typeof Words.prototype.Word,
  WordsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Words, dataSource);
  }
}
