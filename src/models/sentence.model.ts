import {Entity, model, property} from '@loopback/repository';

@model()
export class Sentence extends Entity {
  @property({
    type: 'string',
    id: false,
    generated: false,
  })
  Sentence?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  SentenceId: string;

  constructor(data?: Partial<Sentence>) {
    super(data);
  }
}

export interface SentenceRelations {
  // describe navigational properties here
}
