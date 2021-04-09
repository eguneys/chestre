import { tMo, run } from 'tiqed';
import auth from './auth';

export default function() {

  tMo(auth);

  run();
  
}
