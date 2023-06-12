import areMapsEqual from './7-equality.js';
import { Map } from 'immutable';

const map1 = new Map(
    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
  );
  const map2 = new Map(
    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
  );
  
  console.log(`are they equal: ${areMapsEqual(map1, map2)}`);

