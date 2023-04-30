
import './App.css';
import {Routes , Route } from 'react-router-dom'
import { Box } from '@mui/system';
import {ChannelDetails, Navpar, SearchFeed, VidioDetails , Feed} from './Components/index';


function App() {
  return (
    <div className="App">
      <Box sx={{backgroundColor: '#000'}}>
        <Navpar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='vidio/:id' element={<VidioDetails />} />
          <Route path='channel/:id' element={<ChannelDetails />} />
          <Route path='search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    
    </div>
  );
}

export default App;
