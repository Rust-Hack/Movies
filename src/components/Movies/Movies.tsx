import { useState } from "react";
import CatalogFilm from './CatalogFilm/CatalogFilm';
import './Movies.css';
import SelectFilm from './SelectFilm/SelectFilm';
import RatingFilm from './SelectFilm/RatingFilm';
import Reset from './SelectFilm/Reset';
import Sort from './SelectFilm/Sort';

const Movies = () => {
    const [ selectedGenre, setSelectedGenre ] = useState<string | null>(null);
    const [ selectedYear, setSelectedYear ] = useState<string | null>(null);

    const handleReset = () => {
        setSelectedGenre(null);
        setSelectedYear(null);
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
                <CatalogFilm 
                    selectedGenre={selectedGenre}
                    selectedYear={selectedYear}
                />
            </div>
        </div>
    )
}

export default Movies;
