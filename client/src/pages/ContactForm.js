import React from "react";

function ContactForm() {
  return (
    <div className="bg-white text-black py-10">
      <div className="flex justify-center mt-10">
        <div className="sm:flex gap-16 items-center">
          <div className="hidden sm:flex flex-col gap-32">
            <div className="flex flex-col">
              <p>670C River Oaks Pkwy,</p>
              <p>San Jose, CA 95134</p>
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
            <div className="flex flex-col gap-8">
              <p className="flex flex-col">
                <span className="font-semibold">Monday-Friday</span>10am - 8pm
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">Saturday-Sunday</span>10am - 8pm
              </p>
            </div>
          </div>
          <div className="md:w-96">
            <p className="text-lg font-semibold mb-5">Contact us</p>
            <form className="flex flex-col gap-10">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded focus:outline-none py-1 px-5 border-2 border-black w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded focus:outline-none py-1 px-5 border-2 border-black w-full"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="rounded focus:outline-none py-1 px-5 border-2 border-black w-full h-28"
                />
              </div>
              <button className="border-2 border-black rounded">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
