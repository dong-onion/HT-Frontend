import { API } from './API';

const url = '';

export const getCalendar = async () => {
  const response = await API.get(url);
  return response;
};

export const postCalendar = async data => {
  const response = await API.post(url);
  return response;
};
