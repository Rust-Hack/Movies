import { useEffect, useState } from "react";
import star from '../../../images/star.svg'
import './Catalog.css'

const CatalogFilm = () => {
    const [ getMovie, setGetMovie ] = useState([])
    
    const movie = () => {
        fetch(
            'https://api.themoviedb.org/3/discover/movie?api_key=ffcdeae851e10aa8f18567123ef81640'
        ).then(response => response.json())
        .then(json => setGetMovie(json.results))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        movie();
    }, []);

    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ffcdeae851e10aa8f18567123ef81640')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div className="flexBlockMovieCard">
        {getMovie.map((item, index) => 
            <div className="blockMovieCard" key={index}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width='119px'/>
                </div>
                <div className="informAboutFilm">
                    <div>
                        <h1 className="nameFilm">{item.original_title}</h1>
                        <p className="dateFont">{item.release_date.slice(0,4)}</p>
                        <div className="blockRatingFilm">
                            <img src={star}/>
                            <p>{item.vote_average}</p>
                            <p>{`(${item.vote_count})`}</p>
                        </div>
                        <div>
                            <p>Genres</p>
                            <p>{item.with_genres}</p>
                        </div>
                    </div>

                </div>
                <div></div>
            </div>
        )}
        {/* {getMovie.map((item) => <img src={`https://image.tmdb.org/t/p/w500}${item.poster_path}`}/>)} */}
    </div>
  )
}

export default CatalogFilm
