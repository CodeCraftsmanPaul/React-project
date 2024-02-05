import React, { isValidElement } from "react";
import Slider from "react-slick";
import CarNewsCard from "./CarNewsCard";
import CarNews1 from "../../../assets/img/news1.jpg";
import CarNews2 from "../../../assets/img/news2.jpg";
import CarNews3 from "../../../assets/img/news3.jpg";
import CarNews4 from "../../../assets/img/news4.jpg";
import CarNews5 from "../../../assets/img/news5.jpg";
const CarNews = () => {
  const newData = [
    {
      id: 0,
      img: CarNews1,
      desc: "Toyota touts internal combustion engine potential, even in Ev age  ",
    },
    {
      id: 1,
      img: CarNews2,
      desc: "BMW Group India clocks best-ever annual sales in 2023, leads Luxury electric car segment   ",
    },
    {
      id: 2,
      img: CarNews3,
      desc: "MG Astor 2024 launched  in India, price start at Rs 9.98 lakh ",
    },
    {
      id: 3,
      img: CarNews4,
      desc: "Kia Sonet facelift  launched in india at Rs 7.99 lakh, Tata Nexon & Maruti Suzuki Brezza rival    ",
    },
    {
      id: 4,
      img: "/src/assets/img/news5.jpg",
      desc: "First shift: New-vehicle inventory reaches 3-years high",
    },
    {
      id: 5,
      img: CarNews5,
      desc: "JLR India sales rise 74% in Q3 on robust demand for Rage Rover Velar , Defender",
    },
  ];

  const settings = {
    dots: false,
    Infinite: true,
    slidesToShow: 3,
    SlidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          SlidesToScroll: 3,
          Infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="container mt-14 ">
      <h1 className="font-bold text-4xl text-center">
        Cars <span className="text-primary">News & Advice</span>
      </h1>

      <p className="text-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere
      </p>

      <div className="mt-8">
        <Slider {...settings}>
          {newData.map((item) => (
            <CarNewsCard key={item.id} img={item.img} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarNews;
