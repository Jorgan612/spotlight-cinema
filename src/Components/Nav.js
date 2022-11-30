import '../SCSS/Nav.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ genres, showGenreMovies }) => {
const [searchPhrase, setSearchPhrase] = useState('')

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
        <Link to='/genres'>
          <select className='dropdown selector' onChange={event => showGenreMovies(event.target.value)}>
          <option value="genres">All Genres</option>
          {dropdownList}
         </select>
        </Link>
      </div>
    </nav>
  )
};

export default Nav;

