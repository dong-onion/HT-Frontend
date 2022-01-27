import { API } from './API';

const url = '';

// 회원가입 요청 함수
export const requestSignUp = async (data) => {
  const response = await API.post(url, data);
  return response;
};
