import { Fragment } from "react/jsx-runtime";
import Link from "next/link";
import Back from "./back";

export default async function getMovie(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const res1 = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f63e41350dd22c182698ef9f64049a0b`
  );
  const res2 = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f63e41350dd22c182698ef9f64049a0b`
  );
  const movies: any = await res1.json();
  const videos: any = await res2.json();
  console.log(movies);
  console.log(videos);

  return (
    <>
      <div className="bg-black min-h-screen text-white leading-high threading-wide p-5">
        <div className="flex justify-between items-center">
          <Back />
          <h1 className="text-3xl font-bold text-center mt-5 mb-5">
            Movie Trailer
          </h1>
        </div>
        <hr />
        <div className="flex  gap-5 justify-evenly my-8">
          {videos.results
            .filter((video: any) => video.type === "Trailer")
            .slice(0, 1)
            .map((video: any) => (
              <Fragment key={video.id}>
                <iframe
                  width={"100%"}
                  height="515"
                  className="rounded-xl w-full"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Fragment>
            ))}
        </div>
        <p className="text-2xl font-bold">{movies.title}</p>
        <p>
          <span className="font-bold">Genre:</span>{" "}
          {movies.genres.map((genre: any) => `${genre.name}, `)}
        </p>
        <p>
          <span className="font-bold">Language:</span>{" "}
          {movies.spoken_languages.map((lang: any) => `${lang.name}, `)}
        </p>
        <p>
          <span className="font-bold">About:</span> {movies.overview}
        </p>
        <p>
          <span className="font-bold">Runtime⏲️:</span> {movies.runtime}Mins
        </p>
        <p>
          <span className="font-bold">Rating⭐:</span> {movies.vote_average}
        </p>
        <p>
          <span className="font-bold">Release Date:</span> {movies.release_date}
        </p>
      </div>
    </>
  );
}
