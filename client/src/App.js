import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Teams from "./Components/Teams/Teams";
import About from "./Components/About/About";
import News from "./Components/News/News";
import Blog from "./Components/News/blogs/Blog";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/EventsCarousel/Carousel";
import ClubOfficials from "./Components/ClubOfficials/ClubOfficials";
import Notification from "./Components/Notification/Notification";
import Project from "./Components/Projects/Project";
import { RoboProvider } from "./context/RoboContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <RoboProvider>
        {loading === false ? (
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
                <About />
                <ClubOfficials />
                <Notification />
                <Carousel />
              </Route>

              <Route exact path="/team">
                <Teams />
              </Route>

              <Route exact path="/news">
                <News />
              </Route>

              <Route exact path="/news/:topicSlug">
                <Blog />
              </Route>

              <Route exact path="/events">
                <Events />
              </Route>

              <Route exact path="/gallery">
                <Gallery />
              </Route>
              <Route exact path="/projects">
                <Project />
              </Route>
            </Switch>
            <Footer />
          </div>
        ) : (
          <Loader />
        )}
      </RoboProvider>
    </>
  );
}

export default App;
