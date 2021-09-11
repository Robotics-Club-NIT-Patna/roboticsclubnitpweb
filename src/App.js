
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Teams from './Components/Teams/Teams';
import About from './Components/About/About';
import News from './Components/News/News'
import Events from './Components/Events/Events';
import Gallery from './Components/Gallery/Gallery';
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Switch>
        <Route exact path='/'>
          <Home/>
          <About/>
        </Route>

        <Route exact path='/team'>
          <Teams/>
        </Route>

        <Route  exact path='/about'>
          <About/>
        </Route>


        <Route  exact path='/news'>
          <News/>
        </Route>
        
        <Route  exact path='/events'>
          <Events />
        </Route>

        <Route  exact path='/gallery'>
          <Gallery />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
