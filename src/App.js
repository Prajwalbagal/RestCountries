import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Countries from './components/Countries/Countries';
import Header from'./components/Header/Header';
import CountryDetail from'./components/CountryDetail/CountryDetail';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/RestCountries">
              <Countries/>
            </Route>
            <Route path="/RestCountries/:country">
              <CountryDetail/>
            </Route>
          </Switch>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
