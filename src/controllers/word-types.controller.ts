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
import {WordTypes} from '../models';
import {WordTypesRepository} from '../repositories';

export class WordTypesController {
  constructor(
    @repository(WordTypesRepository)
    public wordTypesRepository : WordTypesRepository,
  ) {}

  @post('/word-types')
  @response(200, {
    description: 'WordTypes model instance',
    content: {'application/json': {schema: getModelSchemaRef(WordTypes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WordTypes, {
            title: 'NewWordTypes',
            
          }),
        },
      },
    })
    wordTypes: WordTypes,
  ): Promise<WordTypes> {
    return this.wordTypesRepository.create(wordTypes);
  }

  @get('/word-types/count')
  @response(200, {
    description: 'WordTypes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(WordTypes) where?: Where<WordTypes>,
  ): Promise<Count> {
    return this.wordTypesRepository.count(where);
  }

  @get('/word-types')
  @response(200, {
    description: 'Array of WordTypes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(WordTypes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(WordTypes) filter?: Filter<WordTypes>,
  ): Promise<WordTypes[]> {
    return this.wordTypesRepository.find(filter);
  }

  @patch('/word-types')
  @response(200, {
    description: 'WordTypes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WordTypes, {partial: true}),
        },
      },
    })
    wordTypes: WordTypes,
    @param.where(WordTypes) where?: Where<WordTypes>,
  ): Promise<Count> {
    return this.wordTypesRepository.updateAll(wordTypes, where);
  }

  @get('/word-types/{id}')
  @response(200, {
    description: 'WordTypes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(WordTypes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(WordTypes, {exclude: 'where'}) filter?: FilterExcludingWhere<WordTypes>
  ): Promise<WordTypes> {
    return this.wordTypesRepository.findById(id, filter);
  }

  @patch('/word-types/{id}')
  @response(204, {
    description: 'WordTypes PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WordTypes, {partial: true}),
        },
      },
    })
    wordTypes: WordTypes,
  ): Promise<void> {
    await this.wordTypesRepository.updateById(id, wordTypes);
  }

  @put('/word-types/{id}')
  @response(204, {
    description: 'WordTypes PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() wordTypes: WordTypes,
  ): Promise<void> {
    await this.wordTypesRepository.replaceById(id, wordTypes);
  }

  @del('/word-types/{id}')
  @response(204, {
    description: 'WordTypes DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.wordTypesRepository.deleteById(id);
  }
}
