import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Hoggle Search</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={'Hoggle Search'} />
        <meta
          property="og:description"
          content="A simple search engine using Google's custom search API"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hoggle-search.vercel.app/" />
        <meta
          property="og:image"
          content="https://hoggle-search.vercel.app/hoggle.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src="/images/google.png" width={300} height={100} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Hoggle Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
