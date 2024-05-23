import { useState, Suspense, lazy, Dispatch, SetStateAction } from "react";
import './Movies.css';
import SelectFilm from './SelectFilm/SelectFilm';
import RatingFilm from './SelectFilm/RatingFilm';
import Reset from './SelectFilm/Reset';
import Sort from './SelectFilm/Sort';
import LoaderCatalog from "./CatalogFilm/LoaderCatalog";

const CatalogFilm = lazy(() => import('./CatalogFilm/CatalogFilm'));

interface MoviesProps {
  setRatingFilm: Dispatch<SetStateAction<{ [key: number]: number }>>;
}

const Movies: React.FC<MoviesProps> = ({ setRatingFilm }) => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleReset = () => {
    setSelectedGenre(null);
    setSelectedYear(null);
  };

  const handleSaveRating = (movieId: number, rating: number) => {
    setRatingFilm((prevRatings: { [key: number]: number }) => ({ ...prevRatings, [movieId]: rating }));
  };

  return (
    <div className="MoviesBlock">
      <h1 className='title'>Movies</h1>
      <div className='filter'>
        <SelectFilm 
          title='Genres' 
          select='Select genre'
          onSelectChange={setSelectedGenre} 
          selectedValue={selectedGenre}
        />
        <SelectFilm 
          title='Release year' 
          select='Select release year'
          onSelectChange={setSelectedYear} 
          selectedValue={selectedYear}
        />
        <RatingFilm/>
        <Reset onReset={handleReset} onGenreReset={() => setSelectedGenre(null)} onYearReset={() => setSelectedYear(null)} />
      </div>
      <div>
        <Sort/>
      </div>
      <div>
        <Suspense fallback={<LoaderCatalog/>}>
          <CatalogFilm 
            selectedGenre={selectedGenre}
            selectedYear={selectedYear}
            onSaveRating={handleSaveRating}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default Movies;
