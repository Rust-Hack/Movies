import './app.css'
import SideBar from './components/SideBar/SideBar';
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';


function App() {

  return (
    <div>
        <MantineProvider>
          <SideBar/>
        </MantineProvider>
    </div>
  )
}

export default App
