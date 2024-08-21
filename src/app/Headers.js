import React from 'react';
import Link from 'next/link';

const Headers = () => {
  return (
    <div className='flex space-x-4 justify-evenly items-center p-4 text-white font-semibold'>
      <Link href='/'>Home</Link>
      <Link href='/AboutUs'> About Us</Link>
      <Link href='/ContactUs'> Contact Us</Link>
    </div>
  );
}

export default Headers;
