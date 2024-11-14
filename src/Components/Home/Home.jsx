import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Store/features/ProductSlice";

const Home = () => {
  const [mainImage, setMainImage] = useState(null);

  const { first } = useSelector((state) => state.products);

  React.useEffect(() => {
    if (first?.image?.length) {
      setMainImage(first.image[0]);
    }
  }, [first]);

  const handleImageChange = (image) => {
    setMainImage(image);
  };

  return (
    <div className="bg-gray-200 mx-5 my-5 p-5 rounded-lg shadow-lg relative">
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="w-full md:w-1/2 h-[80vh]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={mainImage}
            alt="Main Shoe"
          />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-bold">Men Shoes</h1>
          <h1 className="text-5xl font-semibold">
            {first?.name || "NIKE AIR JORDEN 1 MID"}
          </h1>
          <p className="text-xl font-bold text-blue-600">${first?.price}</p>
          <p>
            The Air Jordan 1 Mid brings full-court style and premium comfort to
            an iconic look. Its Air-Sole unit cushions play on the hardwood,
            while the padded collar gives you a supportive feel.
          </p>
          <h1 className="text-lg font-semibold">Select size</h1>
          <div className="flex items-center space-x-2">
            <select className="flex cursor-pointer font-bold items-center border border-gray-300 rounded-md px-3 py-2">
              <option>US 8.5</option>
              <option>US 9.5</option>
              <option>US 10.5</option>
            </select>
            <Link
              to={`/Shoe/${first.id}`}
              className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition duration-300"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        {/* Map over first.image to display thumbnails */}
        {first?.image?.map((image, index) => (
          <div
            key={index}
            className="w-16 h-16 flex items-center justify-center rounded-sm bg-gray-300"
          >
            <img
              onClick={() => handleImageChange(image)}
              className="cursor-pointer h-[80%] w-full ml-3 mt-3 hover:scale-105 transition-transform"
              src={image}
              alt="Shoe thumbnail"
              style={{ transform: "rotate(20deg)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
