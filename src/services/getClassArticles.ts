import { head } from "lodash";
import { fetchClassReservationArticles } from "../api";
import { ClassArticle } from "../interfaces";

export const getClassArticles = async () => {
  const articles = await fetchClassReservationArticles();

  return {
    articles: articles,
    articleNumber: head<ClassArticle>(articles)?.articleNumber ?? "",
  };
};
