import React, { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import nextConfig from 'next.config';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Search() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };
  return (
    <>
      <form className="flex flex-col items-center mt-40 ">
        <Image
          src={
            'https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png'
          }
          width="300"
          height="100"
          alt="google"
        />
        <div className="flex w-full mx-auto justify-center border max-w-[80%]  focus-within:shadow-lg hover:shadow-lg px-5 py-3 rounded-full items-center mt-4">
          <MagnifyingGlassIcon className="h-5 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-1 focus:outline-none px-3"
          />
          <MicrophoneIcon className="h-5 text-gray-500 hover:text-[black] hover:cursor-pointer" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 sm:space-y-0 mt-8 sm:space-x-4 justify-center">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">Im feeling lucky</button>
        </div>
      </form>
    </>
  );
}
