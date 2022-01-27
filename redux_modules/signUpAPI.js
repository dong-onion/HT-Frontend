import * as signUpAPI from '../lib/signUpAPI';

// 액션
const SIGNUP = 'SIGNUP';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'SIGNUP_ERROR';

// 회원가입 요청
export const requestSignUp = (data) => async (dispatch, getState) => {
  dispatch({ type: SIGNUP });
  try {
    const response = await signUpAPI.requestSignUp(data);
    dispatch({ type: SIGNUP_SUCCESS, response });
  } catch (e) {
    dispatch({ type: SIGNUP_FAIL, error: e });
  }
};

// 초기 상태
const initialState = {
  loading: false,
  response: null,
  error: null,
};

// 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, data: action.response };
    case SIGNUP_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default reducer;
