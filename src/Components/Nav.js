import '../SCSS/Nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Nav = ({ genres, movies, showGenreMovies, setSearchValue, showSpecificMovie, setIsSearching, isSearching, searchValue }) => {

  const dropdownList = genres.map((genre) => {
      return <option key={genre.id} id={genre.id} value={genre.id}>{genre.name}</option>
    })


  return (
    <nav className='nav'>
      <h1 className='app-title'>Spotlight Cinema</h1>
      <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      {/* <input 
        className='search-bar-input selector'
        type='text'
        placeholder='Search by title...'
        value={searchPhrase}
        onChange={handleFilter}
      /> */}
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

