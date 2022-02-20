const SET_DATE = 'date/SET_DATE';

export const setDate = date => ({ type: SET_DATE, date });

const initialState = {
  date: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return { date: action.date };
    default:
      return state;
  }
};

export default reducer;
