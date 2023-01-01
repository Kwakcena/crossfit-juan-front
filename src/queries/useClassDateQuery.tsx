import { useQuery } from "react-query";

import { useAppDispatch } from "../hooks/hooks";

import { ClassArticle } from "../interfaces";
import { getClassArticles } from "../services";
import { notify } from "../slices/page";
import { queryKeys } from "./queryKeys";

interface ArticlesQuery {
  articles: ClassArticle[];
  articleNumber: string;
}

export default function useClassDateQuery() {
  const dispatch = useAppDispatch();

  const { data, isLoading } = useQuery<ArticlesQuery, Error>(
    queryKeys.classData(),
    getClassArticles,
    {
      onError: (err: Error) => {
        dispatch(
          notify({
            title: "Error",
            message:
              "일시적인 장애가 발생했습니다.\n관리자에게 문의 해 주세요.",
          })
        );
        console.error(err);
      },
    }
  );

  return {
    articles: data?.articles ?? [],
    articleNumber: data?.articleNumber ?? "",
    isLoading,
  };
}
