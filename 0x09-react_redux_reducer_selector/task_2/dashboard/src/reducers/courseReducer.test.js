import { expect } from 'chai';
import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  const initialState = [];

  it('should return the initial state when no action is passed', () => {
    const action = {};
    const newState = courseReducer(initialState, action);
    expect(newState).to.deep.equal(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS and set isSelected to false for each course', () => {
    const courses = [
      {
        id: 1,
        name: 'ES6',
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        credit: 40,
      },
    ];
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courses,
    };
    const newState = courseReducer(initialState, action);

    const expectedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle SELECT_COURSE and update the specified course with isSelected = true', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = {
      type: SELECT_COURSE,
      index: 2,
    };
    const newState = courseReducer(initialState, action);

    const expectedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    expect(newState).to.deep.equal(expectedState);
  });

  it('should handle UNSELECT_COURSE and update the specified course with isSelected = false', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };
    const newState = courseReducer(initialState, action);

    const expectedState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];
    expect(newState).to.deep.equal(expectedState);
  });
});
