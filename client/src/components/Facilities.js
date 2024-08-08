import React from "react";
import meet1 from "../customCut/meat_1.png";
import diversity from "../customCut/diversity.png";
import organic from "../customCut/organic_1.png";
import field from "../customCut/field.png";
import delivery from "../customCut/delivery-truck_1.png";
import online from "../customCut/online-order.png";

function Facilities() {
  const facilities = [
    {
      img: meet1,
      name: "Custom-Cut",
      detail: "Cut-to-Order by Experienced Butchers",
    },
    {
      img: diversity,
      name: "Ethnic Options",
      detail: "Halal, Separate Station for Beef",
    },
    {
      img: organic,
      name: "Quality",
      detail: "Fresh, Natural, Antibiotic-Free, Organic",
    },
    {
      img: field,
      name: "Eco-Friendly",
      detail: "From Local, Humane, Eco-Conscious Farms",
    },
    {
      img: delivery,
      name: "Delievery",
      detail: "Curbside, In-Store or at your Doorstep",
    },
    {
      img: online,
      name: "Online Ordering",
      detail: "A few clicks all it takes!",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 sm:p-10 lg:p-20 bg-gray-50">
      {facilities.map((data, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <img src={data.img} alt={data.name} className="size-24" />
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-center">{data.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default Facilities;
