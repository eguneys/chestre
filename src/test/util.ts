import { Xhr } from '../xhr';

export class MockXhr implements Xhr {

  constructor() {
  }
  
  json<A>(url: string, opts?: any) {
    return Promise.resolve(undefined);
  }

  form(data: any) { return {}; }

  headers(url: string) {
    return Promise.resolve({
      'set-cookie': [
        'rk2=eyJzZXNzaW9uSWQiOiIxUTl3eEJuSCJ9; path=/; expires=Fri, 09 Apr 2021 17:03:16 GMT; httponly',
        'rk2.sig=eyJzZXNzaW9uSWQiOiIxUTl3eEJuSCJ9; path=/; expires=Fri, 09 Apr 2021 17:03:16 GMT; httponly'
      ]
    });
  }
  
}
