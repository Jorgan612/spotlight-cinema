import '../SCSS/Nav.scss'
import {useState} from 'react';

const Nav = () => {
  const [searchPhrase, setSearchPhrase] = useState('')
  return (
    <nav className='nav'>
      <h1>Spotlight Cinema</h1>
      <input 
        type='text'
        placeholder='Search by title...'
        value={searchPhrase}
        onChange={event => setSearchPhrase(event.target.value)}
      />
        <select>
          <option value="genres">All Genres</option>
          <option value="action">Action</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </select>
    </nav>
  )
}

export default Nav;

