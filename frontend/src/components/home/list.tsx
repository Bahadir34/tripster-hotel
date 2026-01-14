import React, { type FC } from "react";
import { usePlaces } from "../../service";
import Loader from "../loader";
import Error from "../error";
import Card from "../card";
import { useSearchParams } from "react-router-dom";
import type { FilterParams } from "../../types";

const List: FC = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const { data, isLoading, isError, error, refetch } = usePlaces(
    params as FilterParams
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <Error refetch={refetch} info={error?.message || "Bilinmeyen hata"} />
    );
  }

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl">Yakınınızdaki Lokasyonlar</h2>
      <div className="grid gap-5 mt-5">
        {data && data.map((place) => <Card card={place} key={place.id} />)}
      </div>
    </div>
  );
};

export default List;
