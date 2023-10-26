import Links from './components/links/Links'
import Home from './components/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Cheaclo from './components/cheaclo/Cheaclo';
import MachineLearning from './components/ml/MachineLearning';
import OperatingSystems from './components/os/OperatingSystems';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route exact path='/GingerPortfolio' element={<Home/>}/>
            <Route exact path='/GingerPortfolio/cheaclo' element={<Cheaclo/>}/>
            <Route exact path='/GingerPortfolio/machine-learning' element={<MachineLearning/>}/>
            <Route exact path='/GingerPortfolio/operating-systems' element={<OperatingSystems/>}/>
          </Routes>
        </ScrollToTop>
      </Router>
      <Links/>
    </div>
  );
}

export default App;
