import React from "react";

const CarsCard = ({ id, img, name, price }) => {
  return (
    <div
      key={id}
      className="border-2 border-secondary bg-slate-100 text-black rounded-xl mb-2 cursor-pointer hover:bg-secondary hover:text-white transition duration-200 ease-linear"
    >
      <img src={img} alt="img" />
      <h1 className="font-bold text-xl pl-5 text-primary">{name}</h1>
      <p className="pl-5 pb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
      </p>

      <div className="flex justify-between px-6 pb-2">
        <h3 className="font-semibold text-xl">${price}</h3>
        <button className="bg-secondary text-white text-base md:text-lg px-2 md:px-3 py-1 rounded-md  hover:bg-primary transition duration-200 ease-linear">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarsCard;
