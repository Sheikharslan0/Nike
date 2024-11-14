import React, { useState } from 'react';
import cartmainImage from '../../Media/cartmain.png';
import { CiHeart } from 'react-icons/ci';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Store/features/ProductSlice';

const Shoe = () => {

  const {product} = useSelector((state)=>state.products)
  const {data} = useSelector((state)=>state.products)
  const {id} = useParams()
  const { first }=useSelector((state)=>state.products)


  const productInfo = data.find(item => item.id === parseInt(id))
  
  
  const dispatch =useDispatch()
  const handleAddProduct = () => {
    dispatch(addProduct(productInfo))
  }


  const [MainImage, setMainImage] = useState(productInfo?.image[0]);
  const [FirstImage, setFirstImage] = useState(first?.image[0])

  const handleFirstChange = (index) => { 
    setFirstImage(first.image[index]);
  }
  const handleFirstPartChange = (index) => {
    setFirstImage(first.Parts[index])
  }
  
  const handleImageChange = (index) => {
    setMainImage(productInfo.Parts[index]);
    console.log("Color change")
  }
  
  const handleColorChange = (index) => {
    setMainImage(productInfo.image[index]);
  }
  
  const Sizes = [41, 42, 43, 44, 45, 46];

  return (
    <>
      { productInfo ? (
        <div className='border-b-2 p-5 border-gray-300 mb-10 flex flex-col md:flex-row md:gap-10'>
          <div className='flex flex-col gap-5 w-max justify-center'>
            {productInfo.Parts.map((image, index) => (
              <div key={index} className='w-16 h-16 flex items-center justify-center rounded-sm border-2 hover:border-gray-500 transition'>
                <img
                  onClick={() => handleImageChange(index)}
                  src={image}
                  alt='shoe'
                  className='object-cover w-full h-full rounded-sm cursor-pointer hover:scale-110 transition-transform duration-200'
                />
              </div>
            ))}
          </div>

          <div className='flex md:w-1/2 flex-col items-center md:items-start'>
            <img src={MainImage} alt="main shoe" className='w-1/2 md:w-full h-auto rounded-lg shadow-lg transition-transform duration-200 hover:scale-105' />
          </div>

          <div className='flex flex-col mt-5 md:mt-0 md:w-1/2'>
            <h1 className='text-3xl font-bold mt-4'>{productInfo.name}</h1>
            <p className='text-2xl uppercase text-gray-600'>Men's Shoes</p>
            <div className='flex gap-5 mt-2 items-center'>
              <p className='text-xl font-semibold'>${productInfo.price}</p>
              <p className='text-md line-through text-gray-500'><strike>${productInfo.price + 30}</strike></p>
              <p className='text-red-500 font-semibold'>30% OFF</p>
            </div>

            <div className='flex flex-col mb-4'>
              <h1 className='text-xl font-semibold'>Select Color</h1>
              <div className='flex gap-2'>
                {productInfo.image.map((image, index) => (
                  <div key={index} onClick={() => handleColorChange(index)} className='w-16 h-16 flex items-center justify-center rounded-sm border-2 hover:border-gray-500 transition cursor-pointer'>
                    <img src={image} alt={`color-${index}`} className='object-cover w-full h-full rounded-sm' />
                  </div>
                ))}
              </div>
            </div>

            <div className='mb-4'>
              <h1 className='text-xl font-semibold'>Select Size</h1>
              <div className='flex gap-2'>
                {Sizes.map((size, index) => (
                  <div key={index} className='w-10 h-10 px-5 flex items-center justify-center rounded-md border-2 hover:border-gray-500 transition cursor-pointer'>
                    <p className='text-xl font-semibold'>{size}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='mb-4'>
              <Link to={`/bag/${productInfo.id}`} onClick={handleAddProduct} className='w-full px-3 py-2 md:w-32 h-10 bg-black text-white font-semibold rounded-md transition hover:bg-gray-800'>
                Add to Cart
              </Link>
            </div>

            <div className='mb-4'>
              <button className='w-full md:w-32 h-10 flex items-center justify-center bg-transparent text-black ring-2 ring-black font-semibold rounded-md transition hover:bg-gray-100'>
                Favorite <CiHeart className='ml-1 h-7 w-6 hover:text-red-500' />
              </button>
            </div>
          </div>
        </div>
      ) :
      first ? (
        <div className='border-b-2 p-5 border-gray-300 mb-10 flex flex-col md:flex-row md:gap-10'>
          <div className='flex flex-col gap-5 w-max justify-center'>
            {first.Parts.map((image, index) => (
              <div
                key={index}
                className='w-16 h-16 flex items-center justify-center rounded-sm border-2 hover:border-gray-500 transition'
              >
                <img
                  onClick={() => handleFirstPartChange(index)}
                  src={image}
                  alt='shoe'
                  className='object-cover w-full h-full rounded-sm cursor-pointer hover:scale-110 transition-transform duration-200'
                />
              </div>
            ))}
          </div>

          <div className='flex md:w-1/2 flex-col items-center md:items-start'>
            <img src={FirstImage} alt="main shoe" className='w-1/2 md:w-full h-auto rounded-lg shadow-lg transition-transform duration-200 hover:scale-105' />
          </div>

          <div className='flex flex-col mt-5 md:mt-0 md:w-1/2'>
            <h1 className='text-3xl font-bold mt-4'>{first.name}</h1>
            <p className='text-2xl uppercase text-gray-600'>Men's Shoes</p>
            <div className='flex gap-5 mt-2 items-center'>
              <p className='text-xl font-semibold'>${first.price}</p>
              <p className='text-md line-through text-gray-500'><strike>${first.price + 30}</strike></p>
              <p className='text-red-500 font-semibold'>30% OFF</p>
            </div>

            <div className='flex flex-col mb-4'>
              <h1 className='text-xl font-semibold'>Select Color</h1>
              <div className='flex gap-2'>
                {first.image.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleFirstChange(index)}
                    className='w-16 h-16 flex items-center justify-center rounded-sm border-2 hover:border-gray-500 transition cursor-pointer'
                  >
                    <img src={image} alt={`color-${index}`} className='object-cover w-full h-full rounded-sm' />
                  </div>
                ))}
              </div>
            </div>

            <div className='mb-4'>
              <h1 className='text-xl font-semibold'>Select Size</h1>
              <div className='flex gap-2'>
                {Sizes.map((size, index) => (
                  <div key={index} className='w-10 h-10 px-5 flex items-center justify-center rounded-md border-2 hover:border-gray-500 transition cursor-pointer'>
                    <p className='text-xl font-semibold'>{size}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='mb-4'>
              <Link to={`/bag/$0`}  onClick={handleAddProduct} className='w-full px-3 py-2 md:w-32 h-10 bg-black text-white font-semibold rounded-md transition hover:bg-gray-800'>
                Add to Cart
              </Link>
            </div>

            <div className='mb-4'>
              <button className='w-full md:w-32 h-10 flex items-center justify-center bg-transparent text-black ring-2 ring-black font-semibold rounded-md transition hover:bg-gray-100'>
                Favorite <CiHeart className='ml-1' />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
};

export default Shoe;
