import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const first = Map(page1);
  const second = Map(page2);

  return (first.mergeDeep(second));
}
