
import './App.css';
import Outterpage from './Components/Outterpage/Outterpage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Videoconference from './Components/Videoconference';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Outterpage></Outterpage>}></Route>
        <Route path='/Videoconference/:roomid' element={<Videoconference></Videoconference>}></Route>
      </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
