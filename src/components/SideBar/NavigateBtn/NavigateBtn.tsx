import { Tabs } from '@mantine/core';
import './NavigateBtn.css';
import Logo from '../Logo/Logo';
import Movies from '../../Movies/Movies';
import RatedMovies from '../../RatedMovies/RatedMovies';

const NavigateBtn = () => {

    return (
        <div>
            <Tabs color="#E5D5FA" variant="pills" radius="md" orientation="vertical" defaultValue="Movies" >
                <Tabs.List className='tabList'>
                    <Logo/>
                    <Tabs.Tab value="Movies">
                        Movies
                    </Tabs.Tab>
                    <Tabs.Tab value="RatedMovies">
                        RatedMovies
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value='Movies' className='MovieRatedMovieList'>
                    <Movies/>
                </Tabs.Panel>
                <Tabs.Panel value='RatedMovies'>
                    <RatedMovies/>
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}

export default NavigateBtn;