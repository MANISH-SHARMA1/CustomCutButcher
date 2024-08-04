import React from "react";
import toFork from "../assets/toForkk.jpeg";
import ourStory from "../assets/ourStory.jpeg";

function Story() {
  return (
    <div>
      <div className="text-green-900 flex flex-col-reverse md:flex-row justify-around items-center my-5">
        <img src={toFork} alt="toFork" className="w-52 md:size-96" />
        <div className="w-52 md:w-96">
          <p className="text-orange-900 font-semibold">
            ESTABLISHED SINCE 2004
          </p>
          <p className="text-3xl md:text-5xl font-bold">From our farm to your fork</p>
          <p className="font-mono my-2">
            Learn more about the range of our services
          </p>

          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima
            obcaecati tempore animi culpa quia, exercitationem, dignissimos
            aliquam aut ab nostrum accusamus amet. Expedita magnam quis quos
            assumenda ea veniam eum voluptate sit ratione eius quisquam neque
            maiores hic, optio cum nam sed, reprehenderit nobis laboriosam
            explicabo consequuntur. Quae, commodi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            distinctio sapiente eum sit corrupti atque ad hic inventore dolores!
            Maxime!
          </p>
          <button className="border border-green-900 my-2 rounded px-5">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* OUR STORY */}

      <div className="text-green-900 flex flex-col md:flex-row gap-10 justify-around items-center my-5">
        <div className="w-52 md:w-96">
          <p className="text-orange-900 font-semibold">WE LOVE ANIMALS</p>
          <p className="text-3xl md:text-5xl font-bold">The Custom Cut Story</p>
          <p className="font-mono my-2">
            All of the animals on our farm are lovingly cared and believe that
            it really does affect the quality of the meat we're providing.
          </p>

          <p>100% Grass-Fed</p>
          <p>
            Our cattle Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Libero sequi architecto aliquam quia eligendi porro iste illo
            aspernatur inventore, et recusandae debitis deserunt! Laboriosam et
            voluptatem dolorum, perspiciatis magnam minus?
          </p>
        </div>
        <img src={ourStory} alt="toFork" className="size-52 md:size-96" />
      </div>
    </div>
  );
}

export default Story;
