const SET_DAY = 'day/SET_DAY';

export const setDay = day => ({ type: SET_DAY, day });

const initialState = {
  day: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DAY:
      return { day: action.day };
    default:
      return state;
  }
};

export default reducer;
