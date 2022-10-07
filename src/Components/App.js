import React from 'react';
import '../SCSS/App.css';
// import { getVideo } from '../ApiCalls/apiCalls.js';
import Nav from './Nav';
import Banner from './Banner'
import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const App = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [pageCount, setPageCount] = useState(1);
  const [singleView, setSingleView] = useState({});
  const [genres, setGenres] = useState([]);
  const [video, setVideo] = useState([])

  // for search functionality test this url: 
  // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher



  // console.log('video in App', video);

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=${pageCount}`
    setError('')

    try {
      const response = await fetch(url);
      const movies = await response.json();
      setMovies(movies.results);
    } catch(error) {
      setError(error.message);
    }
  }

  const getGenre = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US`
    setError('')

    try {
      const response = await fetch(url);
      const genres = await response.json();
      setGenres(genres.genres);
    } catch(error) {
      setError(error.message);
    }
  }

  const getVideo = async (movies) => {
    // console.log('movies param ---', movies)
    // const url = `https://api.themoviedb.org/3/movie/550/videos?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US`
    // let random = [movies[Math.floor(Math.random() * movies.length)]]
    // console.log('random movie id', random)
    
    const url = `https://api.themoviedb.org/3/movie/550?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US&append_to_response=videos`;
    setError();
    
    try {
      const response = await fetch(url);
      const video = await response.json();
      setVideo(video);
    } catch(error) {
      setError(error.message);
      // console.log(error.message);
    }
  }
  
  useEffect(() => {
    getVideo(movies);
    getMovies();
    getGenre();
  }, [pageCount, location]) 
  
  const previousChangePage = () => {
     setPageCount(pageCount - 1);
     getMovies();
  }

  const nextChangePage = () => {
    setPageCount(pageCount + 1);
     getMovies();
  }

  const returnToPageOne = () => {
    setPageCount(1);
  }

  const getSingleMovieDetails = (id) => {
    const singleMovie = movies.find((movie) => {
      return id === movie.id;
    })
    setSingleView(singleMovie);
  }

  return (
    <div className='app selector'>
      <Nav genres={genres}/>
      {location.pathname === '/' && movies.length > 0 && <Banner video={video} />}
      <div className='divider-div'></div>
      <Routes>
        <Route  path='/' element={<MoviesContainer movies={movies} getSingleMovieDetails={getSingleMovieDetails} />} />
        <Route path='/moviedetails' element={<MovieDetails singleView={singleView} />}/>
      </Routes>
        {location.pathname === '/' && <div className='buttons-div'>
        {pageCount > 1 && <button className='btn selector' onClick={previousChangePage}>Previous</button>}
        <button className='btn selector' onClick={nextChangePage}>Next</button>
        {pageCount > 5 && <button className='btn selector' onClick={returnToPageOne}>Return to Start</button>}
      </div>}
    </div>
  )
}
export default App;