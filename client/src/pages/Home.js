import React from "react";
import { GiMeatCleaver, GiThreeLeaves, GiBuffaloHead } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import Range from "../components/Range";
import Story from "../components/Story";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import Offerings from "../components/Offerings";

function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-white">
        {/* <div className="overflow-x-auto hideScrollbar mx-2">
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
        </div> */}

        {/* <Range />
        <Story /> */}
        <Facilities />
        <Offerings />
        <p className="pt-3 text-green-900 font-semibold text-2xl md:text-3xl text-center">
          Popular Cuts
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5 w-max">
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
    </div>
  );
}

export default Home;
