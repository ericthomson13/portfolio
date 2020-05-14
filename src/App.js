import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import About from './components/about/About';
import Blog from './components/blog/Blog';
import ContactMe from './components/contactMe/ContactMe';
import Home from './components/home/Home';
import Photography from './components/photography/Photography';
import Projects from './components/projects/Projects';

const App = () => (
    <Router className='w-screen bg-black'>
      <div className='w-full px-2 bg-black text-white h-screen'>
      <div className='text-xl space-between content-between'>
        <span className='font-bold text-2xl pl-3'>Eric Thomson</span>
        {/* figure out how to make one on left and one on right */}
        <span className='sub-title ml-5 mr-10'>Full Stack Software Engineer</span>
        <span className='social-icons space-between p-2 content-end float-right'>
          <span className='p-2'>
            <SocialIcon url='http://linkedin.com/in/eric-david-thomson' />
          </span>
          <span className='p-2'>
            <SocialIcon url='https://www.instagram.com/eric.thomson13/' />
          </span>
        </span>
      </div>
        <nav className='bg-grey-600 flex w-screen border-b border-grey-100 items-center justify-around py-5 my-1'>
          <span className="px-8">
            <Link to='/' className='text-xl'>Home</Link>
          </span>
          <span className="px-8">
            <Link to='/about' className='text-xl'>About</Link>
          </span>
          <span className="px-8">
            <Link to='/projects' className='text-xl'>Projects</Link>
          </span>
          <span className='px-8'>
            <Link to='/blog' className='text-xl'>Blog</Link>
          </span>
          <span className="px-8">
            <Link to='/photography' className='text-xl'>Photography</Link>
          </span>
          <span className="px-8">
            <Link to='/contact-me' className='text-xl'>Contact Me</Link>
          </span>
        </nav>
        <Switch>
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
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
);

export default App;
