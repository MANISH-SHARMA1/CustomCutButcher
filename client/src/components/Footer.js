import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-green-900 text-white text-center lg:text-left flex flex-col lg:flex-row justify-around py-5">
      <div>
        <p className="font-semibold text-xl mb-4">Store Location</p>
        <p>670 C River Oaks Pkwy, San Jose, CA 95134</p>
      </div>
      <div className="md:flex justify-around gap-20 md:text-left">
        <div className="mt-4 lg:mt-0">
          <p className="font-semibold text-xl mb-4">Useful Links</p>
          <div className="flex flex-col gap-2">
            <Link>About Us</Link>
            <Link>Our Features</Link>
            <Link>Blog</Link>
            <Link>FAQs</Link>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <p className="font-semibold text-xl mb-4">My Account</p>
          <div className="flex flex-col gap-2">
            <Link>My Account</Link>
            <Link>Contact</Link>
            <Link>Shopping Cart</Link>
            <Link>Shop</Link>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <p className="font-semibold text-xl mb-4">Information</p>
          <div className="flex flex-col gap-2">
            <Link>Delivery Information</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="mt-4 lg:mt-0">
        <p className="font-semibold text-xl mb-4">Working House</p>
        <div className="flex flex-col md:flex-row justify-around lg:flex-col gap-2">
          <p>Monday - Sunday</p>
          <p>10:30am - 7:00pm</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
