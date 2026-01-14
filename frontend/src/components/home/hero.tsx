import React, { type FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero bg-center h-[30vh] bg-cover md:h-[40vh] grid place-items-center rounded-3xl p-5">
      <div className="text-white text-center">
        <h1 className="text-white  text-2xl lg:text-4xl mb-5">
          Tripster ile konaklama rezervasyonu yap
        </h1>
        <p className="md:text-lg lg:text-xl">
          Dünya çapında 1,340,076 oda seni bekliyor!
        </p>
      </div>
    </div>
  );
};

export default Hero;
