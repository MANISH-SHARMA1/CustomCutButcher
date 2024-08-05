import React from "react";
import meet1 from "../customCut/meat_1.png";
import diversity from "../customCut/diversity.png";
import organic from "../customCut/organic_1.png";
import field from "../customCut/field.png";
import delivery from "../customCut/delivery-truck_1.png";
import online from "../customCut/online-order.png";

function Facilities() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 sm:p-10 lg:p-20">
      <div className="flex flex-col items-center gap-2">
        <img src={meet1} alt="Custom-Cut" className="size-24" />
        <p className="text-lg font-semibold">Custom-Cut</p>
        <p className="text-center">Cut-to-Order by Experienced Butchers</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={diversity} alt="Ethnic Options" className="size-24" />
        <p className="text-lg font-semibold">Ethnic Options</p>
        <p className="text-center">Halal, Separate Station for Beef</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={organic} alt="Quality" className="size-24" />
        <p className="text-lg font-semibold">Quality</p>
        <p className="text-center">Fresh, Natural, Antibiotic-Free, Organic</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={field} alt="Eco-Friendly" className="size-24" />
        <p className="text-lg font-semibold">Eco-Friendly</p>
        <p className="text-center">From Local, Humane, Eco-Conscious Farms</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={delivery} alt="Delivery" className="size-24" />
        <p className="text-lg font-semibold">Delivery</p>
        <p className="text-center">Curbside, In-Store or at your Doorstep</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={online} alt="Online Ordering" className="size-24" />
        <p className="text-lg font-semibold">Online Ordering</p>
        <p className="text-center">A few clicks all it takes!</p>
      </div>
    </div>
  );
}

export default Facilities;
