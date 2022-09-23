import React from 'react';
import '../SCSS/App.css';
import Nav from './Nav';
import Banner from './Banner'
import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from 'react';

const App = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')


  const getMovies = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=1'
    setError('')

    try {
      const response = await fetch(url)
      const movies = await response.json()
      setMovies(movies.results)
    } catch(error) {
      setError(error.message)
    }
    // getDummy();
  }
  
  useEffect(() => {
    getMovies();
    // getDummy();
    console.log('movies', movies)
  }, []) 

  // const getDummy = () => {
  //   console.log('what does this print in dummy?', movies)
  // }


  return (
    <>
      <Nav />
      <Banner />
      <div className='divider-div'></div>
      <MoviesContainer movies={movies} />
    </>
  )
}
export default App;
