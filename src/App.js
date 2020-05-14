import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/about/About';
import Blog from './components/blog/Blog';
import ContactMe from './components/contactMe/ContactMe';
import Home from './components/home/Home';
import Photography from './components/photography/Photography';
import Projects from './components/projects/Projects';

const App = () => (
    <Router className='w-screen'>
      <div className='w-full px-2'>
      <div className="font-bold text-2xl">Eric Thomson</div>
      <div className="text-xl">Full Stack Software Engineer</div>
        <nav className='flex w-full border border-gray-600 bg-orange-300 items-center justify-around p-2'>
          <span className="px-8">
            <Link to='/'>Home</Link>
          </span>
          <span className="px-8">
            <Link to='/about'>About</Link>
          </span>
          <span className="px-8">
            <Link to='/projects'>Projects</Link>
          </span>
          <span className='px-8'>
            <Link to='/blog'>Blog</Link>
          </span>
          <span className="px-8">
            <Link to='/photography'>Photography</Link>
          </span>
          <span className="px-8">
            <Link to='/contact-me'>Contact Me</Link>
          </span>
        </nav>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/photography'>
            <Photography />
          </Route>
          <Route path='/contact-me'>
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
);

export default App;
