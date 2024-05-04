import SideBar from '../components/SideBar';
import '../styles/SearchPage.css'
import Movies from '../components/Movies';
import { Route, Routes } from 'react-router-dom';
import RatedMovies from '../components/RatedMovies';

const SearchPage = () => {
    return (
        <div className='separationPage'>
            <SideBar/>
            <Routes>
                <Route path='/Movies' element={<Movies/>}/>
                <Route path='/RatedMovies' element={<RatedMovies/>}/>
            </Routes>
            {/* <Button fullWidth>Full width button</Button> */}
        </div>

    )
}

export default SearchPage;