import React from "react";
import headerImg from "../assets/headerImg.jpg";
import "../style/Alumini.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AlumniCard({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  //console.log(data);
  return (
    <>
      <div className="alumini-box">
        <h1 className="alumni">Alumni</h1>
        <div className="main1">
          <div className="main2">
            <Slider {...settings}>
              {data?.map((item, index) => (
                <div key={item.id} className="main3">
                  <div className="image">
                    <img src={headerImg} alt="movieImage" className="imagein" />
                  </div>
                  <div className="details">
                    <h1 className="name">{item.sname}</h1>
                    <p>{item.cname}</p>
                    <p>{item.mssg}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
