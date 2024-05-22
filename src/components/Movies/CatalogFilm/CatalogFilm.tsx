import React, { useEffect, useState } from "react";
import star from '../../../images/star.svg';
import noSearchFilm from '../../../images/noSearchFilm.svg'
import './Catalog.css';
import SelectRating from "./SelectRating/SelectRating";

interface Movie {
    poster_path: string;
    original_title: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    genre_ids: number[];
}

interface Genre {
    id: number;
    name: string;
}

interface CatalogFilmProps {
    selectedGenre: string | null;
    selectedYear: string | null;
}

const CatalogFilm: React.FC<CatalogFilmProps> = ({ selectedGenre, selectedYear }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetchMovies();
        fetchGenres();
    }, []);

    useEffect(() => {
        filterMovies();
    }, [selectedGenre, selectedYear, movies]);

    const fetchMovies = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=ffcdeae851e10aa8f18567123ef81640')
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                setFilteredMovies(data.results);
                console.log(data.vote_average.lte)
            })
            .catch(err => console.error(err));
    }

    const fetchGenres = () => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ffcdeae851e10aa8f18567123ef81640')
            .then(response => response.json())
            .then(data => setGenres(data.genres))
            .catch(err => console.error(err));
    }

    const filterMovies = () => {
        let filtered = movies;

        if (selectedGenre) {
            filtered = filtered.filter(movie => movie.genre_ids.includes(parseInt(selectedGenre)));
        }
        if (selectedYear) {
            filtered = filtered.filter(movie => movie.release_date.slice(0, 4) === selectedYear);
        }

        setFilteredMovies(filtered);
    }

    const getGenreNames = (genreIds: number[]): string[] => {
        return genreIds.map(id => {
            const genre = genres.find(genre => genre.id === id);
            return genre ? genre.name : '';
        });
    }

    return (
        <div className="flexBlockMovieCard">
            {filteredMovies.length > 0 ? (
                filteredMovies.map((movie, index) => (
                    <div className="blockMovieCard" key={index} >
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width='119px' alt={`${movie.original_title} Poster`} />
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
                                    <p className="genresName">{getGenreNames(movie.genre_ids).join(', ')}</p>
                                </div>
                            </div>
                        </div>
                        <SelectRating />
                    </div>
                ))
            ) : (
                <img src={noSearchFilm} className="noSearchFilm" alt="No Search Results" />
            )}
        </div>
    );
}

export default CatalogFilm;
