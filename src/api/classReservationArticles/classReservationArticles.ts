import axios from "axios";
import { API_URL } from "../../../config";

export const fetchClassReservationArticles = async () => {
  const url = `${API_URL}/articles`;

  try {
    const { data } = await axios.get(url);
    return data.data;
  } catch (error) {
    // TODO: 에러처리
    console.error(error);
  }
}
