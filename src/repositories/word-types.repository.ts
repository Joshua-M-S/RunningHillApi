import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {WordTypes, WordTypesRelations, Words} from '../models';
import {WordsRepository} from './words.repository';

export class WordTypesRepository extends DefaultCrudRepository<
  WordTypes,
  typeof WordTypes.prototype.id,
  WordTypesRelations
> {

  public readonly words: HasManyRepositoryFactory<Words, typeof WordTypes.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('WordsRepository') protected wordsRepositoryGetter: Getter<WordsRepository>,
  ) {
    super(WordTypes, dataSource);
    this.words = this.createHasManyRepositoryFactoryFor('words', wordsRepositoryGetter,);
    this.registerInclusionResolver('words', this.words.inclusionResolver);
  }
}
