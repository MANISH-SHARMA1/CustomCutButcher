import React from "react";
import { GiMeatCleaver, GiThreeLeaves, GiBuffaloHead } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import Range from "../components/Range";
import Story from "../components/Story";
import Card from "../components/Card";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <div className="overflow-x-auto hideScrollbar mx-2">
        <div className="flex gap-5 w-max lg:w-full lg:gap-0 justify-around items-center text-green-900 bg-white font-semibold py-2">
          <p className="flex items-center gap-1">
            <GiThreeLeaves /> <span>100% Grass Feed and Antibiotic free</span>
          </p>
          <p className="flex items-center gap-1">
            <TbTruckDelivery /> <span>Delivery NY wide</span>
          </p>
          <p className="flex items-center gap-1">
            <GiMeatCleaver /> <span>Cut Fresh to Order Promise</span>
          </p>
          <p className="flex items-center gap-1">
            <GiBuffaloHead /> <span>CA Family Owned & Optimized</span>
          </p>
        </div>
      </div>
      <Range />
      <Story />
      <p className="mt-8 text-green-900 font-semibold text-2xl md:text-3xl text-center">
        A few of our most popular products
      </p>
      <div className="overflow-x-auto hideScrollbar mx-2">
        <div className="flex gap-5 w-max mb-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
