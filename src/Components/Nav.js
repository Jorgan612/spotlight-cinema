import '../SCSS/Nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({genres}) => {

  const dropdownList = genres.map((genre) => {
      return <option key={genre.id} id={genre.id} value={genre.name}>{genre.name}</option>
    })
  
  const [searchPhrase, setSearchPhrase] = useState('')
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

