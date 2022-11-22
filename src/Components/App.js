import React from 'react';
import '../SCSS/App.css';
import Nav from './Nav';
import Banner from './Banner';
import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import WatchList from './WatchList';

//need to remove the plus and switch to remove it ==> figure out conditional to upate the button functionality to remove it, and make sure the plus icon is gone 

const App = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [pageCount, setPageCount] = useState(1);
  const [singleView, setSingleView] = useState({});
  const [genres, setGenres] = useState([]);
  const [video, setVideo] = useState([]);
  // const [onWatchList, setOnWatchList] = useState(false);
  const [watchList, setWatchList] = useState(() => {
    const savedTitles = JSON.parse(localStorage.getItem('watchList'));
    const initialValue = savedTitles || [];
    return initialValue;
  });

  // for search functionality test this url: 
  // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher



  // EXPLORE WHETHER OR NOT CONDITIONS NEED TO BE ADDED TO GETMOVIES TO DETERMINE STYLING OF WATCHLIST BUTTON ON RERENDER
  //  
  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&page=${pageCount}`;
    setError('');
    try {
      const response = await fetch(url);
      const movies = await response.json();
      // condition might need to go here BEFORE setMovies sets state to determine watchlist button styling 
      setMovies(movies.results);
    } catch(error) {
      setError(error.message);
    }
  }

  const getGenre = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US`;
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
    localStorage.setItem('watchList', JSON.stringify(watchList));
    // review having more than one useEffect - how would having more than one be helpful? would it prevent api calls overriding styling changes?
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
      // checkWatchList(id);
    }

    const checkWatchList = () => {
      const isOnWatchList = movies.forEach((title) => {
        console.log('forEach title-------', title)
        if (watchList.includes(title)) {
          console.log('IF CONDITION MET_~~_')
        } else {
          console.log('CHECKLIST ELSE CONDITION MET ++++++')
        }
      })
      console.log('CHECKWATCH LIST', watchList);
    }
    

    /*
    Movies in watchlist are still being duplicated AFTER fixing remove watch list button styling (to only show on button clicked and not ALL watchlist buttons)
    watchlist button styling is not reflecting correctly on main page on rerender
    */

  return (
    <div className='app selector'>
      <Nav genres={genres} setError={setError}/>
      {location.pathname === '/' && movies.length > 0 && <Banner video={video} />}
      <div className='divider-div'></div>
      <Routes>
        <Route  path='/' element={<MoviesContainer movies={movies} getSingleMovieDetails={getSingleMovieDetails} addToWatchList={addToWatchList} watchList={watchList} />} />
        <Route path='/moviedetails' element={<MovieDetails singleView={singleView} />} />
        <Route path='/watchlist' element={<WatchList watchList={watchList} checkWatchList={checkWatchList}/>} />
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