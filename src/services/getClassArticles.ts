import { fetchClassReservationArticles } from "../api"
import { ClassArticle } from "../interfaces";
import { getItem, saveItem } from "../utils/sessionStorage";

export const getClassArticles = async () => {
  const beforeArticles = getItem('articles');

  if (beforeArticles) {
    return beforeArticles;
  }

  const articles = await fetchClassReservationArticles();

  saveItem<ClassArticle[]>('articles', articles);

  return articles;
}