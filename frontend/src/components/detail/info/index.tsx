import React, { type FC } from "react";
import type { Place } from "../../../types";
import Rating from "../../card/rating";

interface Props {
  place: Place;
}
const Info: FC<Props> = ({ place }) => {
  return (
    <>
      <div className="flex my-6 justify-between">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold">{place.name}</h2>
          <p className="text-zinc-600">{place.description}</p>
        </div>

        <div>
          <Rating rating={place.rating} expanded />
        </div>
      </div>
      <div>
        <div className="border-b border-zinc-300 pb-2 flex gap-5 text-zinc-600">
          <span className="text-blue-500 cursor-pointer">Genel </span>
          <span className="cursor-pointer">Odalar</span>
          <span className="cursor-pointer">Özellikler</span>
          <span className="cursor-pointer">Kurallar</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          <div>
            <h3 className="text-xl font-semibold mb-2">Özellikler</h3>
            <div className=" ">
              {place.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="inline-block bg-zinc-100 px-2 py-1 rounded-md text-sm mr-2 mb-2"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          <iframe
            width="450"
            height="250"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/search?key=${import.meta.env.VITE_API_KEY}&q=hotels+in+${place.location}`}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Info;
