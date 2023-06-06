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
import {Sentence} from '../models';
import {SentenceRepository} from '../repositories';

export class SentenceController {
  constructor(
    @repository(SentenceRepository)
    public sentenceRepository : SentenceRepository,
  ) {}

  @post('/sentences')
  @response(200, {
    description: 'Sentence model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sentence)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sentence, {
            title: 'NewSentence',
            exclude: ['SentenceId'],
          }),
        },
      },
    })
    sentence: Omit<Sentence, 'SentenceId'>,
  ): Promise<Sentence> {
    return this.sentenceRepository.create(sentence);
  }

  @get('/sentences/count')
  @response(200, {
    description: 'Sentence model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sentence) where?: Where<Sentence>,
  ): Promise<Count> {
    return this.sentenceRepository.count(where);
  }

  @get('/sentences')
  @response(200, {
    description: 'Array of Sentence model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sentence, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sentence) filter?: Filter<Sentence>,
  ): Promise<Sentence[]> {
    return this.sentenceRepository.find(filter);
  }

  @patch('/sentences')
  @response(200, {
    description: 'Sentence PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sentence, {partial: true}),
        },
      },
    })
    sentence: Sentence,
    @param.where(Sentence) where?: Where<Sentence>,
  ): Promise<Count> {
    return this.sentenceRepository.updateAll(sentence, where);
  }

  @get('/sentences/{id}')
  @response(200, {
    description: 'Sentence model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sentence, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Sentence, {exclude: 'where'}) filter?: FilterExcludingWhere<Sentence>
  ): Promise<Sentence> {
    return this.sentenceRepository.findById(id, filter);
  }

  @patch('/sentences/{id}')
  @response(204, {
    description: 'Sentence PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sentence, {partial: true}),
        },
      },
    })
    sentence: Sentence,
  ): Promise<void> {
    await this.sentenceRepository.updateById(id, sentence);
  }

  @put('/sentences/{id}')
  @response(204, {
    description: 'Sentence PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sentence: Sentence,
  ): Promise<void> {
    await this.sentenceRepository.replaceById(id, sentence);
  }

  @del('/sentences/{id}')
  @response(204, {
    description: 'Sentence DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sentenceRepository.deleteById(id);
  }
}
