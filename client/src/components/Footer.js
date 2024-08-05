import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-green-900 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-around">
        {/* Location Section */}
        <div className="mb-6 md:mb-0">
          <p className="text-xl font-semibold mb-2">Location</p>
          <p>670 C River Oaks Pkwy,</p>
          <p>San Jose, CA 95134</p>
          <p>Phone: (408) 331-4020</p>
        </div>

        {/* Hours Section */}
        <div>
          <p className="text-xl font-semibold mb-2">Hours</p>
          <p>Monday - Sunday</p>
          <p>10:30am - 7:00pm</p>
        </div>
      </div>
      <p className="text-center font-bold text-lg mt-5">© 2024 Custom Cut Butcher</p>
    </footer>
  );
}

export default Footer;
