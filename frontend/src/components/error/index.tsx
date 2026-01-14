import React, { type FC } from "react";

interface Props {
  info: string;
  refetch: () => void;
  children?: React.ReactNode;
}
const Error: FC<Props> = ({ info, refetch, children }) => {
  return (
    <div className="">
      {children}
      <div className="grid place-items-center gap-5 mt-10">
        <h1 className="text-2xl font-bold">Üzgünüz bir sorun oluştu</h1>
        <p className="text-red-500">{info}</p>
        <button
          type="button"
          onClick={refetch}
          className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
};

export default Error;
