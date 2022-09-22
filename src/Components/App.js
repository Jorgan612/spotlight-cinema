import React from 'react';
import '../SCSS/App.css';
import Nav from './Nav';
import Banner from './Banner'
import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from React;

const App = () => {
  return (
    <>
      <Nav />
      <Banner />
      <div className='divider-div'></div>
      <MoviesContainer />
    </>
  )
}
export default App;
