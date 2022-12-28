import { useState } from "react";
import { useQuery } from "react-query";
import { ClassArticle } from "../interfaces";
import { getClassArticles } from "../services";

interface ArticlesQuery {
  articles: ClassArticle[];
  articleNumber: string;
}

export default function useClassDateQuery() {
  const queryKey = "classDate";

  const { data, isLoading } = useQuery<ArticlesQuery, Error>(
    [queryKey],
    getClassArticles
  );

  return {
    articles: data?.articles ?? [],
    articleNumber: data?.articles[0].articleNumber ?? "",
    isLoading,
  };
}
