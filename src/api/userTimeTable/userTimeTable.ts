import axios, { AxiosError } from "axios";

import { handleError } from "../../error-handlers";

interface RequestData {
  articleNumber: string;
}

export const fetchUserTimeTable = async (requestData: RequestData) => {
  const url = `https://api.crossfitjuan.com/users`;

  try {
    const { data } = await axios.post(url, requestData);
    return data.data;
  } catch (err) {
    throw handleError(err as AxiosError);
  }
};
