import { it, qed } from 'tiqed';
import AuthXhr from '../auth';
import { MockXhr } from './util';

export default function auth() {

  let authXhr = new AuthXhr(new MockXhr());
  
  it('auths', () =>
    authXhr.guest().then(() => {
      qed('cookie', authXhr.cookie, 'adf');
    }));
  
}
