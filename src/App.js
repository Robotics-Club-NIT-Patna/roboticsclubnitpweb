
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Teams from './Components/Teams/Teams';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route exact path='/team'>
          <Teams/>
        </Route>

        <Route  exact path='/about'>
          <About/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
