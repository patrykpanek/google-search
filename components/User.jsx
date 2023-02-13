import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import nextConfig from 'next.config';

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Man_silhouette.svg/1200px-Man_silhouette.svg.png'
          }
          alt="user-image"
          width={50}
          height={50}
          className={`h-10 w-10 rounded-full bg-gray-200 cursor-pointer ${className}`}
        />
      </>
    );
  }
  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:brightness-105 hover:shadow-md ${className}`}
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  );
}
