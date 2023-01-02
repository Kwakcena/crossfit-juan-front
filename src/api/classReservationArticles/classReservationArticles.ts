import axios, { AxiosError } from "axios";

import { API_URL } from "../../../config";
import { handleError } from "../../error-handlers";

export const fetchClassReservationArticles = async () => {
  const url = `${API_URL}/articles`;

  try {
    const { data } = await axios.get(url);
    return data.data;
  } catch (err) {
    throw handleError(err as AxiosError);
  }
};
