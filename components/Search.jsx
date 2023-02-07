import React from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';

export default function Search() {
  return (
    <>
      <form className="flex flex-col items-center mt-40 ">
        <Image
          objectFit="cover"
          src={
            'https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png'
          }
          width="300"
          height="100"
        />
        <div className="flex w-full mx-auto justify-center border max-w-[80%]  focus-within:shadow-lg hover:shadow-lg px-5 py-3 rounded-full items-center">
          <MagnifyingGlassIcon className="h-5 text-gray-500" />
          <input type="text" className="flex-1 focus:outline-none px-3" />
          <MicrophoneIcon className="h-5 text-gray-500 hover:text-[black] hover:cursor-pointer" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 sm:space-y-0 mt-8 sm:space-x-4 justify-center">
          <button className="btn">Google Search</button>
          <button className="btn">I'm feeling lucky</button>
        </div>
      </form>
    </>
  );
}
