import { useIsFetching, useIsMutating } from "react-query";

export default function useQueriesLoading() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return isFetching || isMutating ? true : false;
}
