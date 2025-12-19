import Link from "next/link";
import Image from "next/image";

export default async function WeeklyCard({ which }: { which: string }) {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=f63e41350dd22c182698ef9f64049a0b"
  );
  const data = await res.json();
  const movies: any[] = data.results;
  return (
    <>
      <h1 className="text-2xl font-bold  mt-10 mb-5">
        <Link href="/Weekly" className="underline">{which}</Link>
      </h1>
      <div className="flex flex-wrap justify-around gap-5 ">
        {movies.slice(0, 6).map((movie) => (
          <div key={movie.id} className="w-50  text-gray-200 flex flex-col grow">
            <Link href={`/Details/${movie.id}`}>
              <div className="mb-2 l">
                <Image
                  src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                  alt={movie.title}
                  width="350"
                  height="300"
                  className="rounded-xl"
                />
              </div>
            </Link>
            <h2 className="text-2xl font-semibold">{movie.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
