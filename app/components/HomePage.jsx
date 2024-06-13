import Head from "next/head";
import Link from "next/link";
import Trending from "./Trending/Trending";

export default function Home() {
  return (
    <div className="bg-white h-[60vh] flex flex-col justify-center">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Find the perfect Job near you
        </h2>
        <p className="text-gray-600 mb-6">Get free jobs within minutes</p>

        <div className="flex justify-center items-center w-full mb-6">
          <div className="flex border-2 rounded-lg overflow-hidden max-w-xl w-full shadow-lg">
            <input
              type="text"
              placeholder="Search Jobs"
              className="px-4 py-2 w-full focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
              Search
            </button>
          </div>
        </div>
        <div className="m-4 mt-6">
          <Trending />
        </div>
      </main>
    </div>
  );
}
