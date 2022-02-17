import * as calendarAPI from '../lib/calendarAPI';

const GET_CALENDAR = 'calendar/GET_CALENDAR';
const POST_CALENDAR = 'calendar/POST_CALENDAR';
const SUCCESS = 'calendar/SUCCESS';
const FAIL = 'calendar/FAIL';

export const getCalendar = data => async (dispatch, getState) => {
  dispatch({ type: GET_CALENDAR });
  try {
    const response = await calendarAPI.getCalendar();
    dispatch({ type: SUCCESS, response });
  } catch (error) {
    dispatch({ type: FAIL, error });
  }
};

export const postCalendar = data => async (dispatch, getState) => {
  dispatch({ type: POST_CALENDAR });
  try {
    const response = await calendarAPI.postCalendar();
    dispatch({ type: SUCCESS, response });
  } catch (error) {
    dispatch({ type: FAIL, error });
  }
};

const initialState = {
  loading: false,
  response: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CALENDAR:
      return { loading: true, response: null, error: null };
    case POST_CALENDAR:
      return { loading: true, response: null, error: null };
    case SUCCESS:
      return { loading: false, response: action.response, error: null };
    case FAIL:
      return { loading: false, response: null, error: action.error };
    default:
      return initialState;
  }
};

export default reducer;
