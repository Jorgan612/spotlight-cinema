import React from 'react';
import '../SCSS/App.css';
import Nav from './Nav';
import Banner from './Banner'
import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from 'react';

const App = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')


  const getMovies = async (page) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2'
    setError('')

    try {
      const response = await fetch(url)
      const movies = await response.json()
      setMovies(movies)
    } catch(error) {
      setError(error.message)
    }
  }
  
  useEffect(() => {
    getMovies();
    console.log('movies', movies)
  }, []) 

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
