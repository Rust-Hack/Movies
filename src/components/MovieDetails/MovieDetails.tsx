import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface MovieDetailsProps {
  
}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ffcdeae851e10aa8f18567123ef81640`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
      {/* Add more movie details as needed */}
    </div>
  );
};

export default MovieDetails;
