import Links from './components/links/Links'
import Home from './components/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Cheaclo from './components/cheaclo/Cheaclo';

function App() {
  return (
    <div>
      <Links/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cheaclo' element={<Cheaclo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
