import axios from "axios";

export const getClassReservationArticles = async () => {
  const url = 'http://localhost:3000/articles';

  try {
    const { data } = await axios.get(url);
    return data.data;
  } catch (error) {
    // TODO: 에러처리
    console.error(error);
  }
}
