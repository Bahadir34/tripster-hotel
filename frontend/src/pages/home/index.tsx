import React, { type FC } from "react";
import Hero from "../../components/home/hero";
import Filter from "../../components/home/filter";
import List from "../../components/home/list";

const Home: FC = () => {
  return (
    <div>
      <Hero />

      <div className="grid lg:grid-cols-4 max-lg:mt-10 gap-5">
        <div>
          <Filter /> 
        </div>
        <div className="lg:col-span-3">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
