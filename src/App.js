
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Teams from './Components/Teams/Teams';
import About from './Components/About/About';
import Event from './Components/Events/Event';

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

        <Route  exact path='/events'>
          <Event
            sampleEvent={sampleEvent}
          />
        </Route>
      </Switch>
      
    </div>
  );
}

const sampleEvent = {
    id: 1,
    image : "https://roboticsnitp.co.in/assets/d3.png",
    description : "It is basically a treasure hunt type event, but not the usual one, as it will have a technical kick.\nA 24 hours event full of mind wobbling passcode encrypted Riddles.This way the participant would have to solve some riddles and the one who would be able to crack all the riddles the fastest, would be our winner.",
    heading : "Digital Detective",
    rewards : ["Swag Kits containing Tech-Stickers and Key-chains","Egghead Io’s free 1-year codes","Code for Cause Discount Coupons"]
  }


export default App;
