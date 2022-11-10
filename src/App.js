import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



import ScrollToTop from "./components/ScrollToTop";
import Skill from "./components/Skill/Skill";
import { Stats } from "./components/Github/Stats";
import { Calendar } from "./components/Github/Calender";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        {/* <ScrollToTop /> */}
        <Home />
        <About />
        <Skill />
        <Projects />
        <Calendar/>
        <Stats/>
        <Resume />
        <Contact />

        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/skill" component={Skill} />
          <Route path="/resume" component={Resume} />
          <Route path="/blog" component={Blogs} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
