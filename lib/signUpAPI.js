import { API } from './API';

const signUpURL = '/auth/sign-up';
const emailCheckURL = '/auth/email';

// 회원가입 요청 함수
export const requestSignUp = async data => {
  const postingData = {
    email: data.email,
    password: data.password,
    name: data.name,
    picture: data.image,
    sex: data.sex,
    height: data.height,
    weight: data.weight,
    profileState: 'Y',
    withdrawlState: 'N',
  };
  const response = await API.post(signUpURL, postingData);
  return response;
};

export const requestSignUpF = async data => {
  const body = new FormData();

  body.append('email', data.email);
  body.append('password', data.password);
  body.append('name', data.name);
  body.append('file', data.image);
  body.append('sex', data.sex);
  body.append('height', data.height);
  body.append('weight', data.weight);
  body.append('profileState', 'Y');
  body.append('withdrawlState', 'N');

  const response = await API.post(signUpURL, body, {
    headers: { 'content-type': 'multipart/form-data' },
  });
  return response;
};

export const checkEmail = async data => {
  const response = await API.get(emailCheckURL);
  return response;
};
