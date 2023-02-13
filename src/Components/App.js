import React from 'react';
import '../CSS/App.css';
import Nav from './Nav';
import Banner from './Banner';
import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import WatchList from './WatchList';
import Search from './Search';


const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY 
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [pageCount, setPageCount] = useState(1);
  const [genres, setGenres] = useState([]);
  const [video, setVideo] = useState([]);
  const [specificGenre, setSpecificGenre] = useState([]);
  const [specificMovie, setSpecificMovie] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [watchList, setWatchList] = useState(() => {
    const savedTitles = JSON.parse(localStorage.getItem('watchList'));
    let initialValue = savedTitles || [];
    return initialValue;
  });
 const [singleView, setSingleView] = useState(() => {
    const singleMovieView = JSON.parse(localStorage.getItem('singleView'));
    let initialValue = singleMovieView 
    return initialValue;
  });

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
  };

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
  };

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
    };

    useEffect(() => {
    getVideo();
    getMovies();
    getGenre();
    showGenreMovies();
    localStorage.setItem('watchList', JSON.stringify(watchList));
    localStorage.setItem('singleView', JSON.stringify(singleView));
  }, [pageCount, location]);
  
    const showGenreMovies = async (event) => {
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
  };

  useEffect(() => {
     const searchMoviesByTitle = async (search) => {
     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`; 
    setError('');
    try {
      const response = await fetch(url);
      const specificMovie = await response.json();
      setSpecificMovie(specificMovie.results);
    } 
    catch(error) {
      setError(error.message);
    }
  };

  if(searchValue !== '') {
    searchMoviesByTitle(searchValue);
  } if(searchValue === '') {
    setSpecificMovie([])
  } 

  }, [searchValue]);

  const previousChangePage = () => {
     setPageCount(pageCount - 1);
     getMovies();
  };

  const nextChangePage = () => {
    setPageCount(pageCount + 1);
     getMovies();
  };

  const returnToPageOne = () => {
    setPageCount(1);
  };

  const getSingleMovieDetails = (id) => {
    const allTitles = [...movies, ...specificGenre, ...specificMovie, ...watchList]
    const singleMovie = allTitles.find((movie) => {
      return id === movie.id;
    });
    setSingleView(singleMovie);
  };

  const addToWatchList = (id) => {
    const allMovies = [...movies, ...specificGenre, ...specificMovie]
    const addMovie = allMovies.find((movie) => {
        return movie.id === id
      })
      watchList.push(addMovie);
      let uniqueWatchList = [...new Set(watchList)];
      setWatchList(uniqueWatchList);   
    };

  const removeFromWatchList = (id) => {
    const filteredMovies = watchList.filter((movieTitle) => {
      return id !== movieTitle.id
    })
    setWatchList(filteredMovies);
  };
  
  return (
    <div className='app selector'>
      <Nav genres={genres} showGenreMovies={showGenreMovies}  setSearchValue={setSearchValue} />
      {location.pathname === '/home' && movies.length > 0 && <Banner video={video} /> }
      <div className='divider-div'></div>
      <Routes>
        <Route path='/home' element={<><Search setSearchValue={setSearchValue} searchValue={searchValue} /><MoviesContainer movies={movies} getSingleMovieDetails={getSingleMovieDetails} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList} specificMovie={specificMovie} /></>} />
        <Route path='/moviedetails' element={<MovieDetails singleView={singleView} />} />
        <Route path='/watchlist' element={<><WatchList /><MoviesContainer movies={watchList} watchList={watchList} removeFromWatchList={removeFromWatchList} getSingleMovieDetails={getSingleMovieDetails} specificMovie={specificMovie}  /></>} />
        <Route path='/genres' element={<MoviesContainer movies={specificGenre} getSingleMovieDetails={getSingleMovieDetails} addToWatchList={addToWatchList} watchList={watchList} removeFromWatchList={removeFromWatchList} specificMovie={specificMovie} setSearchValue={setSearchValue} searchValue={searchValue} />}/>
      </Routes>
        {location.pathname === '/home' && <div className='buttons-div'>
        {pageCount > 1 && <button className='btn selector' onClick={previousChangePage}>Previous</button>}
        <button className='btn selector' onClick={nextChangePage}>Next</button>
        {pageCount > 5 && <button className='btn selector' onClick={returnToPageOne}>Return to Start</button>}
      </div>}
    </div>
  )
};

export default App;