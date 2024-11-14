import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeProduct } from '../Store/features/ProductSlice'
import { useParams } from 'react-router-dom'

const Bag = () => {
  const dispatch = useDispatch()
  // const bag = useSelector((state) => state.products.product)
  const { first } = useSelector((state) => state.products)
  // console.log(bag)


  const {product} = useSelector((state)=>state.products)
  const {data} = useSelector((state)=>state.products)
  const {id} = useParams()
  const productInfo = data.find(item => item.id === parseInt(id))
  // console.log(productInfo)  





  return (
    <div className="min-h-screen py-8">
      <div className="w-full bg-gray-300 text-center py-4 mb-10">
        <h1 className="text-lg font-semibold">
          Extra 25% Off Select Styles. Sign in and <br /> enter code TREATYOURSELF in bag.
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h1 className="text-2xl font-bold text-black">Your Bag</h1>
            <p className="text-gray-500 mb-4">Items in your bag</p>

            {productInfo ? (
                <div className="flex items-center justify-between p-4 mb-6">
                  <img
                    src={productInfo.image[0]}
                    alt={productInfo.name}
                    className="h-44 w-44 object-cover rounded-lg"
                  />
                  <div className="flex flex-col ml-4 w-full">
                    <h3 className="text-xl font-semibold text-gray-800">{productInfo.name}</h3>
                    <p className="text-lg text-gray-600 mt-2">${productInfo.price}</p>

                    <div className="flex items-center justify-evenly mt-4 gap-4 w-max ring-1 ring-black rounded-3xl">
                      <button
                        onClick={() => dispatch(increaseQuantity(productInfo))}
                        className="font-bold py-2 px-4 rounded-lg transition duration-200"
                      >
                        +
                      </button>
                      <p className="text-2xl border-x-2 px-5 border-black font-medium text-gray-800">
                        {productInfo.quantity}
                      </p>
                      <button
                        onClick={() => dispatch(decreaseQuantity(productInfo))}
                        className="font-bold py-2 px-4 rounded-lg transition duration-200"
                      >
                        -
                      </button>
                    </div>

                    <button
                      onClick={() => dispatch(removeProduct(productInfo))}
                      className="mt-4 w-max bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ring-1 ring-black"
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
            ) : first ? (
              <div className="flex items-center justify-between p-4 mb-6">
                <img
                  src={first.image[0]}
                  alt={first.name}
                  className="h-44 w-44 object-cover rounded-lg"
                />
                <div className="flex flex-col ml-4 w-full">
                  <h3 className="text-xl font-semibold text-gray-800">{first.name}</h3>
                  <p className="text-lg text-gray-600 mt-2">${first.price}</p>

                  <div className="flex items-center justify-evenly mt-4 gap-4 w-max ring-1 ring-black rounded-3xl">
                    <button
                      onClick={() => dispatch(increaseQuantity(first))}
                      className="font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                      +
                    </button>
                    <p className="text-2xl border-x-2 px-5 border-black font-medium text-gray-800">
                      {first.Quantity}
                    </p>
                    <button
                      onClick={() => dispatch(decreaseQuantity(first))}
                      className="font-bold py-2 px-4 rounded-lg transition duration-200"
                    >
                      -
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeProduct(first))}
                    className="mt-4 w-max bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ring-1 ring-black"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-600">Your bag is empty.</p>
            )}
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Summary</h1>
            <div className="mb-4">
              <p className="text-gray-600">Do you have any promo code?</p>
              <input
                type="text"
                placeholder="Enter your promo code"
                className="w-full border p-2 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-max mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ring-1 ring-black">
                Apply
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Subtotal</p>
              <p className="text-lg font-bold text-blue-600">
                ${productInfo ? (productInfo.price * productInfo.Quantity).toFixed(2) : first ? (first.price * first.Quantity).toFixed(2) : "0.00"}
              </p>

             
            </div>

            <button className="w-max bg-green-500 text-white py-3 rounded-md mt-4 font-bold px-4 duration-200 ring-1 hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bag
