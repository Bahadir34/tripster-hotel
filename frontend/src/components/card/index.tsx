import { type FC } from "react";
import type { Place } from "../../types";
import { Link } from "react-router-dom";
import Status from "./status";
import Rating from "./rating";

interface Props {
  card: Place;
}

const Card: FC<Props> = ({ card }) => {
  return (
    <Link
      to={`/places/${card.id}`}
      className="border border-zinc-300 rounded-md p-4 gap-4 grid grid-cols-3 min-h-[300px] hover:shadow-md transition duration-300 cursor-pointer"
    >
      <div>
        <img
          src={card.image_url}
          alt={card.name}
          className="size-full aspect-square object-cover rounded-lg"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h4>{card.name}</h4>
            <Status availability={card.availability} />
          </div>
          <p>{card.location}</p>

          <div className="">
            {card.amenities.map((amenity) => (
              <span
                key={amenity}
                className="inline-block bg-zinc-100 px-2 py-1 rounded-md text-xs mr-2"
              >
                {amenity}
              </span>
            ))}
          </div>

          <Rating rating={card.rating} />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold">${card.price_per_night}</span>
          <span className="text-xs text-gray-400">
            vergiler ve ücretler dahildir
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
