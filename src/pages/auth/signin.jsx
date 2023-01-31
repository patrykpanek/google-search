import Header from 'components/Header';
import { getProviders, signIn } from 'next-auth/react';
import React from 'react';

export default function sign({ providers }) {
  return (
    <div>
      <Header />
      <div className="m-40">
        {Object.values(providers).map((provider) => (
          <div
            key={provider.name}
            className="flex flex-col justify-center items-center "
          >
            <img
              src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
              alt="google-logo"
              className="w-[400px] object-cover"
            />
            <p className="text-lg italic my-10 text-center">
              This website is created for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg px-6 py-2 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with google {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
