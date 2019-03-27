import { model, property, AnyType } from '@loopback/repository';

@model({ name: 'ResponseMessage' })
//the red squiggly is OK here :)
export class ResponseMessage {

  constructor(data?: Partial<ResponseMessage>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  @property({ name: 'message', required: true })
  message: string = 'OK';

  @property.array(AnyType, { name: 'jl', required: false })
  jl: any[] = [];

  @property({ name: 'statusCode', required: true })
  statusCode: string = '200';
}