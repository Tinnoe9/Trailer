"use client";

import { link } from "fs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setSearch(e.target.value);
    } else if (e.target.value.length === 0) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (!search) return; // don't fetch when input is empty

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f63e41350dd22c182698ef9f64049a0b`
    )
      .then((res) => res.json())
      .then((data) => setSearchResults(data.results || []))
      .catch((err) => console.log(err));
  }, [search]);

  console.log(searchResults);
  return (
    <>
      <div className="w[100%] sm:w-[50%] ">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search"
          className="w-full sm:w-[40%] h-[30px] p-2.5 rounded-[25px] outline-0 border-2 border-gray-500"/>
      </div>
      {searchResults.length > 0 && (
        <div className="text-white absolute right-20 top-18 p-5 border-2 border-gray-500 rounded-2xl h-100 overflow-y-scroll bg-black">
          <p className="font-bold text-2xl text-center mb-5">Search Results</p>
          {searchResults.map((movie: any) => (
            <Link
              href={`/Details/${movie.id}`}
              key={movie.id}
              className="flex items-center gap-1 mb-5"
            >
              <div
                className="w-15 h-15 bg-cover bg-center bg-no-repeat rounded-xl mb-1 leading-normal"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})`,
                }}
              ></div>
              <p>{movie.title}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
