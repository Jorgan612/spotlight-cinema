import React from 'react';
import '../SCSS/App.css';
import Nav from './Nav';
import Banner from './Banner'
import MoviesContainer from './MoviesContainer';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [pageCount, setPageCount] = useState(1)
  const [singleView, setSingleView] = useState({})


  // for search functionality test this url: 
  // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher


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
  
  useEffect(() => {
    getMovies();
    // randomMovie();
  }, [pageCount]) 

  // const randomMovie = () => {
  //   console.log(movies)
  //   return Math.floor(Math.random() * movies.length)
  //   // console.log('rando', rando)
  // }

  const previousChangePage = () => {
     setPageCount(pageCount - 1)
     getMovies();
  }

  const nextChangePage = () => {
    setPageCount(pageCount + 1)
     getMovies();
  }

  const returnToPageOne = () => {
    setPageCount(1);
  }

  const getSingleMovieDetails = (id) => {
    const singleMovie = movies.find((movie) => {
      return id === movie.id
    })
    setSingleView(singleMovie)
  }

  return (
    <div className='app'>
      <Nav />
      <Banner movies={movies} />
      <div className='divider-div'></div>
      <Routes>
        <Route  path='/' element={<MoviesContainer movies={movies} getSingleMovieDetails={getSingleMovieDetails} />} />
        <Route path='/moviedetails' element={<MovieDetails singleView={singleView} />}/>
      </Routes>
      <div className='buttons-div'>
        {pageCount > 1 && <button onClick={previousChangePage}>Previous</button>}
        <button onClick={nextChangePage}>Next</button>
        {pageCount > 5 && <button onClick={returnToPageOne}>Return to Start</button>}
      </div>
    </div>
  )
}
export default App;


//   return(
//       <div className='App'>
//           <Nav />
//           <Routes> 
//             <Route path='*' element={<Error />} />
//             <Route path='/' element={<Home />}/>
//             <Route path='/quotes' element={<Quotes quotes={this.state.quotes} />}/>
//             <Route path='/search' element={<Search quotes={this.state.quotes} />}/>
//           </Routes>
//       </div>
//     )
//   }
// };