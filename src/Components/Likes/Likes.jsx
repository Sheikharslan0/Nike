import React, { useState } from "react";
import cream1Image from "../../Media/cream1.jpeg";
import grayImage from "../../Media/gray.jpeg";
import pinkImage from "../../Media/pink.jpeg";
import Shoe4Image from "../../Media/Shoe4.png";
import Shoe5Image from "../../Media/Shoe5.png";
import Shoe6Image from "../../Media/Shoe6.png";
import Shoe1Image from "../../Media/Shoe1.png";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Likes = () => {
  const { product } = useSelector((state) => state.products);
  const { data } = useSelector((state) => state.products);
  //    console.log(data)
  //   console.log(product)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [selectedImages, setSelectedImages] = useState(
    data.map((item) => item.image[0])
  );
  const handleImageChange = (index, image) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = image;
    setSelectedImages(newSelectedImages);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-monospace font-bold py-5 ">
        You Might Also Like
      </h1>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-2">
            <Link to={`/Shoe/${item.id}`}  className="w-full h-96 bg-cover bg-center">
              <img
                className="w-full h-[50vh] object-cover rounded"
                src={selectedImages[index]}
                alt={item.name}
              />
            </Link>
            <div className="flex gap-2 p-1">
              {item.image.map((img, idx) => (
                <img
                  onClick={() => handleImageChange(index, img)}
                  key={idx}
                  className="w-16 h-16 rounded-lg object-cover cursor-pointer transform hover:scale-110 transition-transform duration-200"
                  src={img}
                  alt={`${item.name} variant ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex flex-col ">
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <p className="text-sm">{item.Description}</p>
              <p className="text-xl font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  right-4 z-50  rounded-full p-2 cursor-pointer`}
      style={{ ...style, right: "10px" }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  left-4 z-10  rounded-full p-2 cursor-pointer`}
      style={{ ...style, left: "10px" }}
      onClick={onClick}
    ></div>
  );
};

export default Likes;
