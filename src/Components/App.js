import React from 'react';
import '../SCSS/App.css';
import Nav from './Nav';
import Banner from './Banner';
import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import WatchList from './WatchList';
import GenreContainer from './GenreContainer';


const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY 
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [pageCount, setPageCount] = useState(1);
  const [singleView, setSingleView] = useState({});
  const [genres, setGenres] = useState([]);
  const [video, setVideo] = useState([]);
  const [specificGenre, setSpecificGenre] = useState([])
  const [watchList, setWatchList] = useState(() => {
    const savedTitles = JSON.parse(localStorage.getItem('watchList'));
    const initialValue = savedTitles || [];
    return initialValue;
  });
//TO PICK UP WITH ON GENRES
//NEED TO ADD A BACK BTN TO OUR GENRES PAGE TO GET HOME W/O Breaking it
//Attempt to add to watchlist is not working from the genres 
//see notes about bugginess when attempting to add to watchist from genre


  // for search functionality test this url: 
  // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${pageCount}`;
    setError('');
    try {
      const response = await fetch(url);
      const movies = await response.json();
      setMovies(movies.results);
    } catch(error) {
      setError(error.message);
    }
  }

  const getGenre = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    setError('');
    try {
      const response = await fetch(url);
      const genres = await response.json();
      setGenres(genres.genres);
    } catch(error) {
      setError(error.message);
    }
  }

  const getVideo = async () => {    
let url;
    const randomNum = Math.floor(Math.random() * (1000 - 2 + 1)) + 2;     
       url = `https://api.themoviedb.org/3/movie/${randomNum}?api_key=${apiKey}&language=en-US&append_to_response=videos`;
        setError();
        try {
          const response = await fetch(url);
          const videoResponse = await response.json();
           if(videoResponse.success !== false && videoResponse?.videos?.results?.length >= 1) {
              setVideo(videoResponse);  
           } else if (video.length === 0) {
            getVideo();
           }
        } catch(error) {
          setError(error.message);
        }
    }
  
    const showGenreMovies = async (event) => {
    console.log('event ASYNC', event)
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${event}`; 
    setError('');
    try {
      const response = await fetch(url);
      const genres = await response.json();
      setSpecificGenre(genres.results);
    } 
    catch(error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    showGenreMovies();
  }, []);

  useEffect(() => {
    getVideo();
    getMovies();
    getGenre();
    localStorage.setItem('watchList', JSON.stringify(watchList));
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

  const addToWatchList = (id) => {
      const addMovie = movies.find((movie) => {
        if(movie.id === id) {
          watchList.push(movie);
        }
      })
      let uniqueWatchList = [...new Set(watchList)];
      setWatchList(uniqueWatchList);
    }

    const removeFromWatchList = (id) => {
      const filteredMovies = watchList.filter((movieTitle) => {
        return id !== movieTitle.id
      })
      setWatchList(filteredMovies);
    }

  return (
    <div className='app selector'>
      <Nav genres={genres} setError={setError} showGenreMovies={showGenreMovies}/>
      {location.pathname === '/' && movies.length > 0 && <Banner video={video} /> }
      <div className='divider-div'></div>
      <Routes>
        <Route path='/' element={<MoviesContainer movies={movies} getSingleMovieDetails={getSingleMovieDetails} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList} />} />
        <Route path='/moviedetails' element={<MovieDetails singleView={singleView} />} />
        <Route path='/watchlist' element={<WatchList watchList={watchList} removeFromWatchList={removeFromWatchList} />} />
        <Route path='/genres' element={<GenreContainer specificGenre={specificGenre} getSingleMovieDetails={getSingleMovieDetails} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList}/>}/>
      </Routes>
        {location.pathname === '/' && <div className='buttons-div'>
        {pageCount > 1 && <button className='btn selector' onClick={previousChangePage}>Previous</button>}
        <button className='btn selector' onClick={nextChangePage}>Next</button>
        {pageCount > 5 && <button className='btn selector' onClick={returnToPageOne}>Return to Start</button>}
      </div>}
    </div>
  )
};

export default App;