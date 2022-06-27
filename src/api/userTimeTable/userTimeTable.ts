import axios from 'axios';

import { API_URL } from '../../../config';

interface RequestData {
  articleNumber: string;
}

export const fetchUserTimeTable = async (requestData: RequestData) => {
  const url = `${API_URL}/users`;

  try {
    const { data } = await axios.post(url, requestData);
    return data.data;
  } catch (err) {
    // TODO: 에러 처리
    console.error(err);
  }
}
