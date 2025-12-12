import Link from "next/link";
import Image from "next/image";

export default async function Getmovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=f63e41350dd22c182698ef9f64049a0b"
  );
  const data = await res.json();
  const movies: any[] = data.results;
  return (
    <div className="bg-black text-white px-5 py-5 tracking-wide">
      <h1 className="text-3xl font-bold text-center mt-5 mb-5">
        Weekly Top Movies
      </h1>
      <hr />
      <div className="flex flex-wrap justify-evenly gap-5 mt-5 ">
        {movies.map((movie) => (
          <div key={movie.id} className="w-70">
            <Link href={`/Details/${movie.id}`}>
              <div className="mb-2 l">
                <Image
                  src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                  alt={movie.title}
                  width="350"
                  height="300"
                />
              </div>
            </Link>
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
        ))}
        <hr />
      </div>
    </div>
  );
}
