import React, { useState, useEffect } from 'react';
import Loader from './Components/Loader/Loader';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Teams from './Components/Teams/Teams';
import About from './Components/About/About';
import News from './Components/News/News'
import Blog4 from './Components/News/blogs/Blog4';
import Blog1 from './Components/News/blogs/Blog1';
import Blog2 from './Components/News/blogs/Blog2';
import Blog3 from './Components/News/blogs/Blog3';
import Events from './Components/Events/Events';
import Gallery from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import Carousel from './Components/EventsCarousel/Carousel';
import ClubOfficials from './Components/ClubOfficials/ClubOfficials';
import Notification from './Components/Notification/Notification';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
<>
 {
   loading === false ? ( 
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path='/'>
        <Home/>
        <About/>
        <ClubOfficials/>
        <Notification/>
        <Carousel/>
      </Route>

      <Route exact path='/team'>
        <Teams/>
      </Route>

      <Route  exact path='/news'>
        <News/>
      </Route>

      <Route  exact path='/news/blog1' >
        <Blog1/>
      </Route>

      <Route  exact path='/news/blog2' >
        <Blog2/>
      </Route>

      <Route  exact path='/news/blog3' >
        <Blog3/>
      </Route>

      <Route  exact path='/news/blog4' >
        <Blog4/>
      </Route>

      <Route  exact path='/events'>
        <Events />
      </Route>

      <Route  exact path='/gallery'>
        <Gallery />
      </Route>

    </Switch>
    <Footer/>
   
  
  </div>

   ) : (
    <Loader />
  )}
  </>
    
  );
}

export default App;
