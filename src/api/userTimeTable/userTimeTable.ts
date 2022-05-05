import axios from 'axios';

import { BASE_URL } from '../../configs/config';

interface RequestData {
  articleNumber: string;
  naverId: string;
  naverPw: string;
}

export const fetchUserTimeTable = async (requestData: RequestData) => {
  const url = `http://localhost:3000/users`;

  try {
    const { data } = await axios.post(url, requestData);
    return data.data;
  } catch (err) {
    // TODO: 에러 처리
    console.error(err);
  }
}
