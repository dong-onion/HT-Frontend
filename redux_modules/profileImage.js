// 프로필 이미지를 위한 리덕스 모듈

const SET_IMAGE = 'profileImage/SET_IMAGE';

export const setImage = image => ({ type: SET_IMAGE, image });

const initialState = {
  image: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return { image: action.image };
    default:
      return state;
  }
};

export default reducer;
