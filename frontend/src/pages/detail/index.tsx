import { type FC } from "react";
import { Link, useParams } from "react-router-dom";
import { usePlace } from "../../service";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { MoveLeftIcon } from "lucide-react";
import Images from "../../components/detail/images";
import Info from "../../components/detail/info";
import Button from "../../components/detail/button";

const Detail: FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error, refetch } = usePlace(id);

  if (isLoading) {
    return (
      <Loader>
        <div className="flex  mb-5">
          <Link
            to={"/"}
            className="border border-zinc-200 p-2 rounded-md transition hover:bg-zinc-200"
          >
            <MoveLeftIcon />
          </Link>
        </div>
      </Loader>
    );
  }

  if (isError)
    return (
      <Error refetch={refetch} info={error.message}>
        {" "}
        <div className="flex  mb-5">
          <Link
            to={"/"}
            className="border border-zinc-200 p-2 rounded-md transition hover:bg-zinc-200"
          >
            <MoveLeftIcon />
          </Link>
        </div>
      </Error>
    );

  if (!data) return null;

  return (
    <div>
      <div className="flex  mb-5">
        <Link
          to={"/"}
          className="border border-zinc-200 p-2 rounded-md transition hover:bg-zinc-200"
        >
          <MoveLeftIcon />
        </Link>
      </div>

      <Images image={data.image_url} />
      <Info place={data} />
      <Button id={data.id} />
    </div>
  );
};

export default Detail;
