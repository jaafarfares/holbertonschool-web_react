import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
  } from '../actions/courseActionTypes';
  
  const initialState = [];
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS: {
        const courses = action.data.map(course => ({
          ...course,
          isSelected: false,
        }));
        return courses;
      }
      case SELECT_COURSE: {
        const index = action.index;
        if (index >= 0 && index < state.length) {
          const updatedCourse = {
            ...state[index],
            isSelected: true,
          };
          return [
            ...state.slice(0, index),
            updatedCourse,
            ...state.slice(index + 1),
          ];
        }
        return state;
      }
      case UNSELECT_COURSE: {
        const index = action.index;
        if (index >= 0 && index < state.length) {
          const updatedCourse = {
            ...state[index],
            isSelected: false,
          };
          return [
            ...state.slice(0, index),
            updatedCourse,
            ...state.slice(index + 1),
          ];
        }
        return state;
      }
      default:
        return state;
    }
  };
  
  export default courseReducer;
  