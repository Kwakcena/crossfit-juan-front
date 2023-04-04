import { head } from "lodash";

import axios from "axios";

import { ClassArticle } from "../interfaces";

export const getClassArticles = async () => {
  const { data } = await axios.get('/api/articles');

  return {
    articles: data.data,
    articleNumber: head<ClassArticle>(data.data)?.articleNumber ?? "",
  };
};
