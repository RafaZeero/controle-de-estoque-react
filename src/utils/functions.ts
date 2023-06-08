import axios from 'axios';
import { apiUrl } from '../constants/api';
import * as TE from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';
// import * as E from 'fp-ts/lib/Either';

type Ex = (param: any) => any;

export function createOneItem(item: any): TE.TaskEither<Error, Ex> {
  return pipe(
    TE.tryCatch(
      async () => {
        const response = await axios.post(`${apiUrl}/`, JSON.stringify(item));
        console.log('response from create item: ', response.data);
        return 'aaaa';
      },
      // reason => console.log('Error', reason)
      reason => Error(`Error ${reason}`)
    ),
    TE.bimap(
      erro => {
        console.log(erro);
        return erro;
      },
      dado => {
        console.log(dado);
        const test = () => void 0;
        return test;
      }
    )
  );
}

export function getAllProduct() {
  return pipe(
    TE.tryCatch(
      async () => {
        const response = await axios.get(`${apiUrl}/data`);
        console.log('all products: ', response.data);
      },
      reason => console.log('Error', reason)
    )
  );
}
