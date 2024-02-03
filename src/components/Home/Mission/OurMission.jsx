import React from "react";
import img from "../../../assets/img/mission.jpg";
const OurMission = () => {
  return (
    <div className="container my-10 ">
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-primary">Mission</span>
        </h1>
      </div>

      <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-8 ">
        {/* IMG SECTION */}
        <div className="w-full md:w-2/4 ">
          <img src={img} alt="img" className="rounded-lg" />
        </div>

        {/*CONTENT SECTION  */}
        <div className="w-full md:w-2/4 space-y-4">
          <h1 className="font-bold text-primary text-lg lg:text-3xl">
            To create a community where every Journey is extraordinary{" "}
          </h1>

          <h2 className="font-semibold text-lg lg:text-2xl">
            Empower individual to achieve sustainable mobility solution and
            inspire a positive impact on the environment.
          </h2>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          </p>
          <p className="text-sm lg:text-base">
            quisquam asperiores modi vero a quidem magnam provident aliquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae
            voluptates excepturi iste, molestias sunt natus reprehenderit
            voluptates excepturi iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
