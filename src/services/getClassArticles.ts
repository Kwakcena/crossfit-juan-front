import { head } from "lodash";

import axios from "axios";

import { ClassArticle } from "../interfaces";
import { API_URL } from "../../config";

export const getClassArticles = async () => {
  const { data } = await axios.get(`${API_URL}/api/articles`);

  return {
    articles: data.data,
    articleNumber: head<ClassArticle>(data.data)?.articleNumber ?? "",
  };
};
