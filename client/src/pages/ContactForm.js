import React from "react";

function ContactForm() {
  return (
    <div className="bg-white text-green-950 border-y border-green-900 py-10">
      <div className="flex justify-center mt-10">
        <div className="sm:flex gap-16 items-center">
          <div className="hidden sm:flex flex-col gap-52">
            <div className="flex flex-col">
              <p>670C River Oaks Pkwy,</p>
              <p>San Jose, CA 95134</p>
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
                  className="rounded focus:outline-none py-1 px-5 border-2 border-green-900 w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded focus:outline-none py-1 px-5 border-2 border-green-900 w-full"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="rounded focus:outline-none py-1 px-5 border-2 border-green-900 w-full h-28"
                />
              </div>
              <button className="border-2 border-green-900 rounded">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
