import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Store/features/ProductSlice';

const New = () => {
    const { data } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const add = (product) => {
        dispatch(addProduct(product));
    };

    const [visibleItems, setVisibleItems] = useState(6); 
    const [selectedImages, setSelectedImages] = useState(data.map(item => item.image[0]));

    const handleImageChange = (index, image) => {
        const newSelectedImages = [...selectedImages];
        newSelectedImages[index] = image;
        setSelectedImages(newSelectedImages);
    };

    const handleShowMore = () => {
        setVisibleItems(visibleItems + 3); 
    };

    return (
        <div className="bg-gray-100 py-10">
            <h1 className="text-5xl text-center font-bold mb-4 text-gray-800">New This Week</h1>
            <p className="text-2xl text-center mb-10 text-gray-500">Featuring The New Arrivals</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20">
                {data.slice(0, visibleItems).map((item, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <Link to={`/Shoe/${item.id}`} className="w-full h-64 bg-cover bg-center">
                            <img className="w-full h-full object-cover rounded-t-lg" src={selectedImages[index]} alt={item.name} />
                        </Link>
                        <div className="flex gap-2 p-4 justify-center border-t border-gray-200">
                            {item.image.map((img, idx) => (
                                <img 
                                    onClick={() => handleImageChange(index, img)}  
                                    key={idx} 
                                    className="w-16 h-16 rounded-lg object-cover cursor-pointer transform hover:scale-110 transition-transform duration-200 border border-gray-300 shadow-sm" 
                                    src={img} 
                                    alt={`${item.name} variant ${idx + 1}`} 
                                />
                            ))}
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h2>
                            <p className="text-gray-600 mb-2 text-sm">{item.Description}</p>
                            <p className="text-lg font-bold text-blue-600">$ {item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {visibleItems < data.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={handleShowMore}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default New;
