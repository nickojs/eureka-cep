import 'whatwg-fetch';
import { rest } from 'msw';
import address from './address';

export const handlers = [
  rest.get('https://viacep.com.br/ws/*', (req, res, ctx) => res(
  ctx.delay(500),
  ctx.json(address)
  ))
];
