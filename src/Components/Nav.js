import '../SCSS/Nav.css'
import {useState} from 'react';

const Nav = () => {
  const [searchPhrase, setSearchPhrase] = useState('')
  return (
    <nav className='nav'>
      <h1 className='app-title'>Spotlight Cinema</h1>
      <input 
        className='search-bar-input'
        type='text'
        placeholder='Search by title...'
        value={searchPhrase}
        onChange={event => setSearchPhrase(event.target.value)}
      />
        <select className='dropdown'>
          <option value="genres">All Genres</option>
          <option value="action">Action</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </select>
    </nav>
  )
}

export default Nav;

