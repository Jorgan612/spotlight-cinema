import '../SCSS/Nav.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// NOTES!!!
//trying to just get the console to reflect a genre collection when the dropdown is selected for that specific genre
// unable to get state to set when values change for genreId and genre movie list
//still need after troubleshooting, its own component to show these movies in the movie container on main page

const Nav = ({ genres, setError }) => {
const [searchPhrase, setSearchPhrase] = useState('')
//Below is the specific genres movies after being filtered out if this ever works
const [specificGenre, setSpecificGenre] = useState([])
// console.log("=======>[specificGenre]", specificGenre)
// const [genreId, setGenreId] = useState(genres[0])

  const showGenreMovies = async (event) => {
    console.log('event ASYNC', event)
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US&with_genres=${event}`; 
    setError('');
    try {
      const response = await fetch(url);
      const genres = await response.json();
      console.log("BEFPRE setting stategenres===>", genres)
      setSpecificGenre(genres.results);
      console.log("After setting state genres.results  =>", genres.results)
    } 
    catch(error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    showGenreMovies();
  }, []);


  const dropdownList = genres.map((genre) => {
      return <option key={genre.id} id={genre.id} value={genre.id}>{genre.name}</option>
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
        <Link to='/genre'>
          <select className='dropdown selector' onChange={event => showGenreMovies(event.target.value)}>
          {/* <option value="genres">All Genres</option> */}
          {dropdownList}
         </select>
        </Link>
      </div>
    </nav>
  )
}

export default Nav;

