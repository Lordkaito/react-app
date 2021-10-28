import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import Quotes from './components/Quotes';

// import everything I need here

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <div className='home'>
            <div className='inner'>
              <Showcase />
            </div>
          </div>
        </Route>
        <Route path='/calculator'>
          <Calculator />
        </Route>
        <Route path='/quotes'>
          <Quotes />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
