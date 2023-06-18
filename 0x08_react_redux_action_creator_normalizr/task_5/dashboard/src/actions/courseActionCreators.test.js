import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

test('selectCourse action creator', () => {
  const index = 1;
  const action = selectCourse(index);
  expect(action).toEqual({ type: SELECT_COURSE, index: index });
});

test('unSelectCourse action creator', () => {
  const index = 1;
  const action = unSelectCourse(index);
  expect(action).toEqual({ type: UNSELECT_COURSE, index: index });
});
