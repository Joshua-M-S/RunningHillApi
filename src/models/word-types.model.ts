import {Entity, model, property, hasMany} from '@loopback/repository';
import {Words} from './words.model';

@model()
export class WordTypes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Types: string;

  @hasMany(() => Words)
  words: Words[];

  constructor(data?: Partial<WordTypes>) {
    super(data);
  }
}

export interface WordTypesRelations {
  // describe navigational properties here
}

export type WordTypesWithRelations = WordTypes & WordTypesRelations;
