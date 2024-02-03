import React from "react";
import img from "../../assets/img/vision.jpg";

const Vision = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
      {/* IMG SECTION */}
      <div className="w-full md:w-2/5">
        <img src={img} alt="" className="rounded-lg" />
      </div>

      {/* ?CONTENT SECTION */}
      <div className="w-full md:w-2/4 space-y-4">
        <h1 className="text-4xl font-bold">Our Vision</h1>
        <h2 className="font-semibold text-lg lg:text-2xl">
          Empower individual to achieve sustainable mobility solution and
          inspire a positive impact on the environment
        </h2>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus
        </p>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus
          rerum animi reprehenderit voluptatibus vitae mollitia ut. Delectus a
          iste, reprehenderit ab quis, aspernatur nesciunt consequatur ullam
          inventore at ex!
        </p>
      </div>
    </div>
  );
};

export default Vision;
