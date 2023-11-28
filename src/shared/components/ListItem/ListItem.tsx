import React, { memo } from "react";
import { useQuery } from "react-query";

const ListItem = memo(
  ({
    id,
    secId,
    queryMethod,
  }: {
    id: string;
    queryMethod: (e: any) => any;
    secId: string;
  }) => {
    const { data, isLoading, isFetching }: any = useQuery(
      [id, secId],
      () => queryMethod(id),
      {
        cacheTime: 100000,
        staleTime: 0,
        refetchOnWindowFocus: false,
      }
    );
    if (isLoading || (isFetching && !data)) {
      return <div className="skeleton-loader placeholder"></div>;
    }
    return <div className="mb-1">{data?.title || data?.name}</div>;
  },
  (a: { id: string }, b: { id: string }) => a.id === b.id
);

export default ListItem;
