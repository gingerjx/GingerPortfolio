import Links from './components/links/Links'
import Home from './components/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Cheaclo from './components/cheaclo/Cheaclo';
import MachineLearning from './components/ml/MachineLearning';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div>
      <Links/>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cheaclo' element={<Cheaclo/>}/>
            <Route path='/machine-learning' element={<MachineLearning/>}/>
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
