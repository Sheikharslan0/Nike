import React from 'react';

const Footer = () => {
    const data = [
        {
            name: "Resources",
            links: ["Gift Card", "Find a Store", "Membership", "Site Feedback"]
        },
        {
            name: "Help",
            links: ["Gift Card", "Find a Store", "Membership", "Site Feedback"]
        },
        {
            name: "Company",
            links: ["Gift Card", "Find a Store", "Membership", "Site Feedback"]
        },
        {
            name: "Promotions and Discount",
            links: ["Gift Card", "Find a Store", "Membership", "Site Feedback"]
        }
    ];

    return (
        <div className='border-t-2 border-gray-500 mx-5 py-10 px-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-8'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 items-center lg:items-start'>
                        <h3 className='font-semibold text-lg'>{item.name}</h3>
                        <ul className='space-y-2'>
                            {item.links.map((link, idx) => (
                                <li key={idx}>
                                    <a 
                                        href='#' 
                                        className='text-gray-500 hover:text-black transition duration-200'
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className='border-t border-gray-700 mt-8 pt-4 text-center text-gray-400'>
                <p className='mb-2'>
                    © 2023 Nike, Inc. All rights reserved.
                </p>
                <div className='flex flex-wrap justify-center space-x-4'>
                    <a href='#' className='hover:text-black transition duration-200'>Guide</a>
                    <a href='#' className='hover:text-black transition duration-200'>Terms of Sales</a>
                    <a href='#' className='hover:text-black transition duration-200'>Nike Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
