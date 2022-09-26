import React from 'react';
import '../SCSS/App.css';
import Nav from './Nav';
import Banner from './Banner'
import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from 'react';

const App = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [pageCount, setPageCount] = useState(1)


  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=${pageCount}`
    setError('')

    try {
      const response = await fetch(url)
      const movies = await response.json()
      setMovies(movies.results)
    } catch(error) {
      setError(error.message)
    }
  }
  
  useEffect(() => {
    getMovies();
  }, []) 

  const previousChangePage = () => {
     setPageCount(pageCount - 1)
    console.log(" - page count", pageCount)
     getMovies();
  }

  const nextChangePage = () => {
    setPageCount(pageCount + 1)
    console.log(" + page count", pageCount)
     getMovies();
  }

  return (
    <>
      <Nav />
      <Banner />
      <div className='divider-div'></div>
      <MoviesContainer movies={movies} />
      <div className='buttons-div'>
        {pageCount > 1 && <button onClick={previousChangePage}>Previous</button>}
        <button onClick={nextChangePage}>Next</button>
      </div>
    </>
  )
}
export default App;
