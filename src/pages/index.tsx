import React, { useEffect, useMemo, useState } from "react";
import { GET_PLANETS } from "../endpoints/Planets.endpoints";
import Loader from "../shared/components/loader/Loader";
import PlanetCard, {
  PlanetProps,
} from "../shared/components/PlanetCard/PlanetCard";
import { useQuery } from "react-query";
import clsx from "clsx";

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [localData, setLocalData] = useState<PlanetProps[]>([]);
  const { data, isLoading, error }: any = useQuery(
    ["planets", page],
    ({ queryKey }: any) => GET_PLANETS(`planets/?page=${queryKey[1]}`),
    {
      refetchOnWindowFocus: false,
    }
  );

  const fetchNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const Planets = useMemo(() => {
    if (localData) {
      return localData?.map((planet: PlanetProps) => (
        <PlanetCard {...planet} />
      ));
    }
    return [];
  }, [localData]);

  useEffect(() => {
    if (data) {
      setLocalData((prev) => [...prev, ...data?.results]);
    }
  }, [data]);

  console.log(data, localData.length);
  if (isLoading && localData?.length === 0) {
    return (
      <div className="index-page">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="index-page">Error</div>;
  }

  return (
    <div className="index-page">
      <div className="list-container">{Planets}</div>
      {(data?.next || isLoading) && (
        <div className="flex justify-center mt-6">
          <button
            onClick={fetchNextPage}
            style={{ minWidth: "180px", borderRadius: "24px", height: "48px" }}
            className={clsx(
              "image-button",
              isLoading && localData?.length > 0 ? "skeleton-loader" : ""
            )}
            disabled={isLoading}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};
IndexPage.whyDidYouRender = true;

export default IndexPage;
