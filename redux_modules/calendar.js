const SET_CALENDAR = 'calendar/SET_CALENDAR';

export const setWorkoutList = workoutList => ({
  type: SET_CALENDAR,
  workoutList,
});

const initialState = {
  workoutList: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CALENDAR:
      return { workoutList: action.workoutList };
    default:
      return initialState;
  }
};

export default reducer;
