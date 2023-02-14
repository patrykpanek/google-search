import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import User from './User';

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href="https://about.google/">
          <p className="link">About</p>
        </Link>
        <Link href="https://store.google.com.">
          <p className="link">Store</p>
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com/">
          <p className="link">Gmail</p>
        </Link>
        <Link
          className="link"
          href={`/search?term=${
            router.query.term || 'google'
          }&searchType=image`}
        >
          Images
        </Link>

        <User />
      </div>
    </header>
  );
}
