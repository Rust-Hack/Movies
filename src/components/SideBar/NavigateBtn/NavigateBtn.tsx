import { Tabs } from "@mantine/core";
import "./NavigateBtn.css";
import Logo from "../Logo/Logo";
import Movies from "../../Movies/Movies";
import RatedMovies from "../../RatedMovies/RatedMovies";
import { useState, useEffect } from "react";

const NavigateBtn = () => {
  const [ratingFilm, setRatingFilm] = useState<{ [key: number]: number }>({});
  const [movies, setMovies] = useState<{ [key: number]: any }>({});

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=ffcdeae851e10aa8f18567123ef81640"
    )
      .then((response) => response.json())
      .then((data) => {
        const moviesData = data.results.reduce(
          (acc: { [key: number]: any }, movie: any) => {
            acc[movie.id] = movie;
            return acc;
          },
          {}
        );
        setMovies(moviesData);
      })
      .catch((err) => console.error(err));
  };

  const handleSaveRating = (movieId: number, rating: number) => {
    setRatingFilm((prevRatings: { [key: number]: number }) => ({
      ...prevRatings,
      [movieId]: rating,
    }));
  };

  return (
    <div>
      <Tabs
        color="#E5D5FA"
        variant="pills"
        radius="md"
        orientation="vertical"
        defaultValue="Movies"
      >
        <Tabs.List className="tabList">
          <Logo />
          <Tabs.Tab value="Movies">Movies</Tabs.Tab>
          <Tabs.Tab value="RatedMovies">Rated Movies</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Movies" className="MovieRatedMovieList">
          <Movies setRatingFilm={setRatingFilm} />
        </Tabs.Panel>
        <Tabs.Panel value="RatedMovies" className="MovieRatedMovieList">
          <RatedMovies
            ratingFilm={ratingFilm}
            movies={movies}
            onSaveRating={handleSaveRating}
          />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default NavigateBtn;
