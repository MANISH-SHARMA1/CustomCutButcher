import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-around">
        {/* Location Section */}
        <div className="mb-6 md:mb-0">
          <p className="text-xl font-semibold mb-2">Location</p>
          <p>670 C River Oaks Pkwy,</p>
          <p>San Jose, CA 95134</p>
          <p>Phone: (408) 331-4020</p>

          <div className="my-6 underline">
            <a
              href="https://www.google.com/maps/place/670+River+Oaks+Pkwy,+San+Jose,+CA+95134,+USA/@37.3987386,-121.9236222,17z/data=!3m1!4b1!4m6!3m5!1s0x808fc9428586a05f:0x9ab078a19dcd0d96!8m2!3d37.3987386!4d-121.9236222!16s%2Fg%2F11c1_f8r0x?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              OPEN IN MAPS
            </a>
          </div>
        </div>

        {/* Hours Section */}
        <div>
          <p className="text-xl font-semibold mb-2">Hours</p>
          <p>Monday - Sunday</p>
          <p>10:30am - 7:00pm</p>
        </div>
      </div>
      <p className="text-center font-bold text-lg mt-5">
        © 2024 Custom Cut Butcher
      </p>
    </footer>
  );
}

export default Footer;
