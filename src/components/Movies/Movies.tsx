import CatalogFilm from './CatalogFilm/CatalogFilm';
import './Movies.css'
import RatingFilm from './SelectFilm/RatingFilm';
import Reset from './SelectFilm/Reset';
import SelectFilm from './SelectFilm/SelectFilm';
import Sort from './SelectFilm/Sort';

const Movies = () => {
    return (
        <div className="MoviesBlock">
            <h1 className='title'>Movies</h1>
            <div className='filter'>
                <SelectFilm title='Genres' select='Select genre'/>
                <SelectFilm title='Release year' select='Select release year'/>
                <RatingFilm/>
                <Reset/>
            </div>
            <div>
                <Sort/>
            </div>
            <div>
                <CatalogFilm/>
            </div>
        </div>
    )
}

export default Movies;