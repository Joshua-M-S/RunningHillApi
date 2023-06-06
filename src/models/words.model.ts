import {Entity, model, property} from '@loopback/repository';

@model()
export class Words extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;
  
  @property({
    type: 'string',
    id: false,
    generated: false,
  })
  Word?: string;

  @property({
    type: 'string',
  })
  wordTypesId?: string;

  constructor(data?: Partial<Words>) {
    super(data);
  }
}

export interface WordsRelations {
  // describe navigational properties here
}

export type WordsWithRelations = Words & WordsRelations;
