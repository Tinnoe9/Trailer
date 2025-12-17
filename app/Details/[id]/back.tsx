"use client";
import { useRouter } from "next/navigation";

 
export default function Back() {
  const router = useRouter();
  function useback(){
   return router.back()
  }
  return (
    <div className="w-5 h-5 border  bg-white/50 rounded-full grid place-content-center">
      <button
        onClick={useback}
        className="text-black grid place-content-center"
      >
        &lt;
      </button>
    </div>
  );
}
