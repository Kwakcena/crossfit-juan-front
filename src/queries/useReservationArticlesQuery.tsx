import { useState } from "react";
import { useQuery } from "react-query";
import { ClassArticle } from "../interfaces";
import { getClassArticles } from "../services";

interface ArticlesQuery {
  articles: ClassArticle[];
  articleNumber: string;
}

export default function useReservationArticlesQuery() {
  const [articleNumber, setArticleNumber] = useState<string>("");

  const queryKey = "articles";

  const { data, isLoading } = useQuery<ArticlesQuery, Error>(
    [queryKey],
    getClassArticles,
    {
      onSuccess: ({ articleNumber }) => {
        setArticleNumber(articleNumber);
      },
    }
  );

  return {
    articles: data?.articles ?? [],
    articleNumber,
    setArticleNumber,
    articlesLoading: isLoading,
  };
}
