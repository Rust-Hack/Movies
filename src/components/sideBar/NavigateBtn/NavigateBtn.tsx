import { Tabs } from '@mantine/core';
import './NavigateBtn.css'
import { useNavigate, useParams } from 'react-router-dom';

const NavigateBtn = () => {
    const navigate = useNavigate();
    const { tabValue } = useParams();

    return (
        <>
            <Tabs color="#E5D5FA" variant="pills" radius="md" orientation="vertical" defaultValue="gallery" value={tabValue} onChange={(value) => navigate(`/${value}`)}>
                <Tabs.List className='tabList'>
                    <Tabs.Tab value="Movies">
                        Movies
                    </Tabs.Tab>
                    <Tabs.Tab value="RatedMovies">
                        Rated movies
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs>
        </>
    );
}

export default NavigateBtn;