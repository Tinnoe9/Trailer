import Image from "next/image";
import Link from "next/link";
import DailyCard from "./card";
import WeeklyCard from "./Weekly/Weeklycard";
import Search from "./favourites/search";
import TopCard from "./New/new";

export default function Home() {
  return (
    <div className="py-[3px] sm:py-[15px] px-[30px] bg-black  text-white">
      <div className="flex flex-col sm:flex-row items-center justify-between sticky top-0 py-[15px] px-[30px] mb-[30px] border-b border-b-grey-500 gap-3 sm:gap-0 bg-black">
        <div className=" w-full sm:w-[50%] justify-items-center sm:justify-items-start">
          <h1 className=" text-5xl font-bold">Trailer</h1>
        </div>
        <Search />
      </div>
      <TopCard which="TMDB Top >" />
      <DailyCard which="Daily Trending >" />
      <WeeklyCard which="Weekly Trending >" />
    </div>
  );
}
