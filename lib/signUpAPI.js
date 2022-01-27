import { API } from './API';
import { useSelector } from 'react-redux';

const url = '/auth/sign-up';

// 회원가입 요청 함수
export const requestSignUp = async (data) => {
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
  const response = await API.post(url, postingData);
  return response;
};
