import './app.css'
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import HomeArrow from './pages/HomeArrow';
import { BrowserRouter} from 'react-router-dom';


function App() {

  return (
    <div>
      <BrowserRouter>
        <MantineProvider>
            <HomeArrow/>
        </MantineProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
