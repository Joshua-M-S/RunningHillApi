import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  WordTypes,
  Words,
} from '../models';
import {WordTypesRepository} from '../repositories';

export class WordTypesWordsController {
  constructor(
    @repository(WordTypesRepository) protected wordTypesRepository: WordTypesRepository,
  ) { }

  @get('/word-types/{id}/words', {
    responses: {
      '200': {
        description: 'Array of WordTypes has many Words',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Words)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Words>,
  ): Promise<Words[]> {
    return this.wordTypesRepository.words(id).find(filter);
  }

  @post('/word-types/{id}/words', {
    responses: {
      '200': {
        description: 'WordTypes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Words)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof WordTypes.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Words, {
            title: 'NewWordsInWordTypes',
            exclude: ['Word'],
            optional: ['wordTypesId']
          }),
        },
      },
    }) words: Omit<Words, 'Word'>,
  ): Promise<Words> {
    return this.wordTypesRepository.words(id).create(words);
  }

  @patch('/word-types/{id}/words', {
    responses: {
      '200': {
        description: 'WordTypes.Words PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Words, {partial: true}),
        },
      },
    })
    words: Partial<Words>,
    @param.query.object('where', getWhereSchemaFor(Words)) where?: Where<Words>,
  ): Promise<Count> {
    return this.wordTypesRepository.words(id).patch(words, where);
  }

  @del('/word-types/{id}/words', {
    responses: {
      '200': {
        description: 'WordTypes.Words DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Words)) where?: Where<Words>,
  ): Promise<Count> {
    return this.wordTypesRepository.words(id).delete(where);
  }
}
