// 회원가입 상태 관리를 위한 리덕스 모듈입니다.

// 액션 타입
const SET_EMAIL = 'signUp/SET_EMAIL';
const SET_PASSWORD = 'signUp/SET_PASSWORD';
const SET_NAME = 'signUp/SET_NAME';
const SET_SEX = 'signUp/SET_SEX';
const SET_WEIGHT = 'signUp/SET_WEIGHT';
const SET_HEIGHT = 'signUp/SET_HEIGHT';
const SET_AGE = 'signUp/SET_AGE';
const SET_IMAGE = 'signUp/SET_IMAGE';

// 액션 생성 함수
export const setEmail = (email) => ({ type: SET_EMAIL, email });
export const setAge = (age) => ({ type: SET_AGE, age });
export const setPassword = (password) => ({ type: SET_PASSWORD, password });
export const setName = (name) => ({ type: SET_NAME, name });
export const setSex = (sex) => ({ type: SET_SEX, sex });
export const setWeight = (weight) => ({ type: SET_WEIGHT, weight });
export const setHeight = (height) => ({ type: SET_HEIGHT, height });
export const setImage = (image) => ({ type: SET_IMAGE, image });

// 초기 상태
const initialState = {
  email: null,
  age: null,
  password: null,
  name: null,
  sex: null,
  weight: null,
  height: null,
  image: null,
};

// 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SET_SEX:
      return {
        ...state,
        sex: action.sex,
      };
    case SET_WEIGHT:
      return {
        ...state,
        weight: action.weight,
      };
    case SET_HEIGHT:
      return {
        ...state,
        height: action.height,
      };
    case SET_AGE:
      return {
        ...state,
        age: action.age,
      };
    case SET_IMAGE:
      return {
        ...state,
        image: action.image,
      };
    default:
      return state;
  }
};

export default reducer;
