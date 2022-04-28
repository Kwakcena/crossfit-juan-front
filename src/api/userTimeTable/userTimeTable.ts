import axios from 'axios';

import { BASE_URL } from '../../configs/config';

interface RequestData {
  articleNumber: number;
  naverId: string;
  naverPw: string;
}

export const postUserTimeTable = async (requestData: RequestData) => {
  const url = `${BASE_URL}/users`;

  try {
    const { data } = await axios.post(url, requestData);
    return data.data;
  } catch (err) {
    // TODO: 에러 처리
    console.error(err);
  }
}
