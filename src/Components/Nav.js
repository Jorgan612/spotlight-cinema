import '../SCSS/Nav.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoviesContainer from './MoviesContainer';
//Should we be using Router for the genres? (diff page views)

// NOTES!!!
//trying to just get the console to reflect a genre collection when the dropdown is selected for that specific genre
// unable to get state to set when values change for genreId and genre movie list
//still need after troubleshooting, its own component to show these movies in the movie container on main page

const Nav = ({ genres, setError }) => {
const [searchPhrase, setSearchPhrase] = useState('')
const [specificGenre, setSpecificGenre] = useState([])
const [genreId, setGenreId] = useState(0)

  const showGenreMovies = async (id) => {
    console.log("ID====>", id)
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US&with_genres=${id}`; 
    setError('');
    try {
      const response = await fetch(url);
      const genres = await response.json();
      setSpecificGenre(genres.results);
    } 
    catch(error) {
      setError(error.message);
    }
    console.log("specificGenre", specificGenre)
  }

  useEffect(() => {
    showGenreMovies(genreId);
    console.log("NAV USE EFFECT WORKING ???")
  }, [genreId]);


  const dropdownList = genres.map((genre) => {
      // console.log("RETURN value =======>", genre)
      return <option onChange={event => {setGenreId(event.target.value)}} key={genre.id} id={genre.id} value={genre.id}>{genre.name}</option>
    })

  return (
    <nav className='nav'>
      <h1 className='app-title'>Spotlight Cinema</h1>
      <input 
        className='search-bar-input selector'
        type='text'
        placeholder='Search by title...'
        value={searchPhrase}
        onChange={event => setSearchPhrase(event.target.value)}
      />
      <div className='watchlist-genre-container'>
        <Link to='/watchlist'>
          <button className='selector watchlist-btn'>Watchlist</button>
        </Link>
        <select className='dropdown selector'>
          <option value="genres">All Genres</option>
          {dropdownList}
        </select>
      </div>
    </nav>
  )
}

export default Nav;

