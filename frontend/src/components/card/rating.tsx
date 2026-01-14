import React, { type FC } from "react";

interface Props {
  rating: number;
  expanded?: boolean;
}

const Rating: FC<Props> = ({ rating, expanded }) => {
  const color =
    rating >= 4.7
      ? "blue-500"
      : rating >= 4
      ? "green-500"
      : rating > 3
      ? "yellow-500"
      : "red-500";

  const text =
    rating >= 4.7
      ? "Çok İyi"
      : rating >= 4
      ? "İyi"
      : rating > 3
      ? "Orta"
      : "Kötü";

  return (
    <div
      className={`w-fit text-white p-2 rounded-lg font-bold   flex items-center gap-2`}
    >
      <span className={`text-white rounded-lg p-2 bg-${color}`}>{rating}</span>
      {expanded && <span className={`text-${color}`}>{text}</span>}
    </div>
  );
};

export default Rating;
