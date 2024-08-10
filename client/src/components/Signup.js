import React from "react";

function Signup() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 px-4 md:px-8 lg:px-16">
      <p className="text-xl md:text-2xl lg:text-3xl text-center">Sign Up Now</p>
      <p className="text-center text-sm max-w-lg">
        For early bird discounts, exclusive offers, product announcements - plus a few surprises.
      </p>
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <input
          type="text"
          placeholder="Your email"
          className="text-sm focus:outline-none border border-gray-200 py-2 px-4 w-full md:flex-1"
        />
        <button className="bg-green-900 text-white text-sm lg:text-base py-2 px-4 w-full md:w-auto hover:opacity-95">SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default Signup;
