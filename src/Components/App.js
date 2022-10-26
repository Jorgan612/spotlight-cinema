import React from 'react';
import '../SCSS/App.css';
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
  const [video, setVideo] = useState([]);
  const [watchList, setWatchList] = useState([]);

  // for search functionality test this url: 
  // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher


  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=${pageCount}`
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

  const getVideo = async () => {    
let url;
    const randomNum = Math.floor(Math.random() * (1000 - 2 + 1)) + 2;     
       url = `https://api.themoviedb.org/3/movie/${randomNum}?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US&append_to_response=videos`;
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
  
  useEffect(() => {
    getVideo();
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

  const addToWatchList = (id) => {

    // CONFIRM CONDITIONAL IS WORKING - CAN CLICK SAME MOVIE AND FUNCTIONAL STILL ADDS THE MOVE TO THE WATCHLIST ARRAY REGARDLESS OF IT ALREADY BEING IN THERE. 
    if (!watchList.includes(id)) {
      // conditional does resolve to TRUE - but every time
      const addMovie = movies.filter((movie) => {
        console.log(movie.id, 'SPACE', id)
        return movie.id === id;
      })
      console.log('addMovie filter----', addMovie)
      // addMovie returns an array of elements that match conditional(one movie whose id matches) - since addMovie is an array is this an issue matching ids?
      setWatchList([...watchList, addMovie]);
    }
    else {
      console.log('DO NOT ADD DUPLICATE')
    }

    console.log('watchList STATE:', watchList)
  }

  return (
    <div className='app selector'>
      <Nav genres={genres}/>
      {location.pathname === '/' && movies.length > 0 && <Banner video={video} />}
      <div className='divider-div'></div>
      <Routes>
        <Route  path='/' element={<MoviesContainer movies={movies} getSingleMovieDetails={getSingleMovieDetails} addToWatchList={addToWatchList} />} />
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