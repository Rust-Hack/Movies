import "./RatedMovies.css";
import star from "../../images/star.svg";
import search from "../../images/Search.svg";
import activeStar from "../../images/startActive.svg";
import haventRatedMovie from "../../images/haventRatedMovie.svg";
import { Rating, TextInput, rem } from "@mantine/core";
import closeRating from "../../images/CloseRating.svg";
import { useState, useEffect } from "react";

interface RatedMoviesProps {
  ratingFilm: { [key: number]: number };
  movies: { [key: number]: any };
  onSaveRating: (movieId: number, rating: number) => void;
}

const RatedMovies = (props: RatedMoviesProps) => {
  const [ratingOpen, setRatingOpen] = useState<{ [key: number]: boolean }>({});
  const [quantityStars, setQuantityStars] = useState<{ [key: number]: number }>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);

  const { ratingFilm, movies, onSaveRating } = props;

  const ratedMovies = Object.keys(ratingFilm).map((movieId) => {
    const movie = movies[parseInt(movieId)];
    return { ...movie, userRating: ratingFilm[parseInt(movieId)] };
  });

  useEffect(() => {
    if (ratedMovies.length > 0) {
      setFilteredMovies(ratedMovies);
    }
  }, [ratedMovies.length, setFilteredMovies]);
  

  const handleOpenRating = (movieId: number) => {
    setRatingOpen({ ...ratingOpen, [movieId]: true });
    setQuantityStars({ ...quantityStars, [movieId]: ratingFilm[movieId] || 0 });
  };

  const handleCloseRating = (movieId: number) => {
    setRatingOpen({ ...ratingOpen, [movieId]: false });
  };

const handleSaveRating = (movieId: number) => {
    onSaveRating(movieId, quantityStars[movieId]);
    setRatingOpen((prevRatingOpen) => ({ ...prevRatingOpen, [movieId]: false }));
  };
  

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const filtered = ratedMovies.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchQuery)
    );
    setFilteredMovies(filtered);
  };
  

  return (
    <div className="ratedMovieBlock">
      <div className="searchRatedMovie">
        <h1>Rated movies</h1>
        <div className="searchRatedMovieInput">
          <TextInput
            leftSectionPointerEvents="none"
            leftSection={<img src={search} style={{ width: rem(16), height: rem(16) }} />}
            placeholder="Search movie title"
            id="searchInput"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearch} className="searchRatedFilmBtn">
            Search
          </button>
        </div>
      </div>
      <div className="flexBlockMovieCard">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div className="blockMovieCard" key={movie.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width="119px"
                  alt={`${movie.original_title} Poster`}
                />
              </div>
              <div className="informAboutFilm">
                <div className="cardInformation">
                  <div className="titleRatingYear">
                    <h1 className="nameFilm">{movie.original_title}</h1>
                    <p className="dateFont">{movie.release_date.slice(0, 4)}</p>
                    <div className="blockRatingFilm">
                      <img src={star} alt="Star Icon" />
                      <p>{movie.vote_average}</p>
                      <p>{`(${movie.vote_count})`}</p>
                    </div>
                  </div>
                  <div className="blockGenres">
                    <p className="titleGenres">Genres</p>
                    {/* <p className="genresName">{getGenreNames(movie.genre_ids).join(', ')}</p> */}
                  </div>
                </div>
              </div>
              <div
                className="starIcon1"
                onClick={() => handleOpenRating(movie.id)}
              >
                <p>{movie.userRating}</p>
                <img src={activeStar} alt="" />
              </div>
              {ratingOpen[movie.id] && (
                <div className="ratingWindow">
                  <div className="ratingWindowBlock">
                    <div className="blockRatingWindowTitle">
                      <h1 className="ratingWindowTitle">
                        {movie.original_title}
                      </h1>
                      <img
                        src={closeRating}
                        alt="Close"
                        onClick={() => handleCloseRating(movie.id)}
                      />
                    </div>
                    <div className="blockRatingWindowStar">
                      <h1 className="blockRatingWindowStarTitle">
                        {movie.original_title}
                      </h1>
                      <Rating
                        color="rgb(152, 84, 246)"
                        size="xl"
                        count={10}
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        value={quantityStars[movie.id]}
                        onChange={(value) =>
                          setQuantityStars({
                            ...quantityStars,
                            [movie.id]: value,
                          })
                        }
                      />
                      <button
                        className="blockRatingWindowStarButton"
                        onClick={() => handleSaveRating(movie.id)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="haventRatedMovie">
            <img src={haventRatedMovie} />
            <p className="haventRatedMovieTitle">
              You haven't rated any films yet
            </p>
            <button className="findMovies">Find movies</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RatedMovies;
