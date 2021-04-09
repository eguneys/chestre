import { Xhr } from './xhr';

const extractCookies = (cookies: Array<string>) =>
  cookies
    .map(_ => _.split(';')[0])
    .join(';');

export default class AuthXhr implements Xhr {
  xhr: Xhr
  cookie?: string

  constructor(xhr: Xhr) {
    this.xhr = xhr;
  }

  guest() {
    return this.xhr
      .headers(`/auth/guest`)
      .then(_ => {
        this.cookie = extractCookies(_['set-cookie']);
        return this;
      });
  }

  custom(cookie: string) {
    this.cookie = cookie;
    return this;
  }

  json<A>(url: string, opts: any = {}) {
    let { headers, ...rest } = opts;

    let extra: any = {};

    if (this.cookie) {
      extra['cookie'] = this.cookie;
    }
    
    return this.xhr.json<A>(url, {
      ...rest,
      headers: {
        ...headers,
        ...extra
      }
    });
  }

  form(data: any): any {
    return this.xhr.form(data);
  }

  headers(url: string) {
    return this.xhr.headers(url);
  }
}
