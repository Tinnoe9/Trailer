import Link from "next/link";
import Image from "next/image";
import Back from "../Details/[id]/back"

export default async function Getmovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?primary_release_year=2025&sort_by=vote_average.desc&vote_count.gte=50&api_key=f63e41350dd22c182698ef9f64049a0b"
  );
  const data = await res.json();
  const movies: any[] = data.results;
  return (
    <div className="bg-black text-white px-5 py-5 tracking-wide">
      <div className="flex items-center justify-between">
        <Back/>
        <h1 className="text-3xl font-bold text-center mt-5 mb-5">
          2025 TMDB TOP
        </h1>
      </div>
      <hr />
      <div className="flex flex-wrap justify-center gap-10 mt-5 gap ">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col sm:flex-row  grow  relative w-[600px] sm:h-64"
          >
            <Link href={`/Details/${movie.id}`} className="sm:w-[50%] relative">
              <Image
                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                alt={movie.title}
                width="300"
                height="100"
                className=" w-full sm:w-[80%] h-full rounded-xl m-auto"
              />
            </Link>
            <div className="sm:w-[50%] sm:overflow-y-scroll" style={{scrollbarWidth: "none"}}>
              <h2 className="text-2xl font-semibold">{movie.title}</h2>
              <p>
                <span className="text-xl">Language:</span>
                {movie.original_language}
              </p>
              <p>
                <span className="text-xl">Release Date:</span>
                {movie.release_date}
              </p>
              <p>
                <span></span>Details: {movie.overview}
              </p>
              <p>
                <span className="text-xl">Rating⭐:</span> {movie.vote_average}
              </p>
            </div>
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}
