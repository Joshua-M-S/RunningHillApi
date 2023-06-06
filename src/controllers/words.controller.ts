import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Words} from '../models';
import {WordsRepository} from '../repositories';

export class WordsController {
  constructor(
    @repository(WordsRepository)
    public wordsRepository : WordsRepository,
  ) {}

  @post('/words')
  @response(200, {
    description: 'Words model instance',
    content: {'application/json': {schema: getModelSchemaRef(Words)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Words, {
            title: 'NewWords',
          }),
        },
      },
    })
    words: Omit<Words, 'Word'>,
  ): Promise<Words> {
    return this.wordsRepository.create(words);
  }

  @get('/words/count')
  @response(200, {
    description: 'Words model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Words) where?: Where<Words>,
  ): Promise<Count> {
    return this.wordsRepository.count(where);
  }

  @get('/words')
  @response(200, {
    description: 'Array of Words model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Words, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Words) filter?: Filter<Words>,
  ): Promise<Words[]> {
    return this.wordsRepository.find(filter);
  }

  @patch('/words')
  @response(200, {
    description: 'Words PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Words, {partial: true}),
        },
      },
    })
    words: Words,
    @param.where(Words) where?: Where<Words>,
  ): Promise<Count> {
    return this.wordsRepository.updateAll(words, where);
  }

  @get('/words/{id}')
  @response(200, {
    description: 'Words model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Words, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Words, {exclude: 'where'}) filter?: FilterExcludingWhere<Words>
  ): Promise<Words> {
    return this.wordsRepository.findById(id, filter);
  }

  @patch('/words/{id}')
  @response(204, {
    description: 'Words PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Words, {partial: true}),
        },
      },
    })
    words: Words,
  ): Promise<void> {
    await this.wordsRepository.updateById(id, words);
  }

  @put('/words/{id}')
  @response(204, {
    description: 'Words PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() words: Words,
  ): Promise<void> {
    await this.wordsRepository.replaceById(id, words);
  }

  @del('/words/{id}')
  @response(204, {
    description: 'Words DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.wordsRepository.deleteById(id);
  }
}
