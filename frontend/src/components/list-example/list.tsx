import { type FC } from "react";

import { useDeletePlace, usePlaces } from "../../service";

const ListQuery: FC = () => {
  const { data, isLoading, isError, refetch } = usePlaces();

  const { mutate, isPending } = useDeletePlace();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;
  return (
    <div>
      <h1>Tanstack Query Method to Fetch Data</h1>
      {data?.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <p>{place.description}</p>
          <button
            disabled={isPending}
            onClick={() => mutate(place.id)}
            style={{
              backgroundColor: "rgb(100,25,27)",
              outline: "none",
            }}
          >
            {isPending ? "Deleting..." : "Delete Place"}
          </button>
        </div>
      ))}
      <button onClick={() => refetch()}>Refetch Data</button>
    </div>
  );
};

export default ListQuery;
