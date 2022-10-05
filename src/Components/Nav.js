import '../SCSS/Nav.css'
import {useState} from 'react';

const Nav = ({genres}) => {
  const dropdownList = genres.map((genre) => {
      return <option id={genre.id} value={genre.name}>{genre.name}</option>
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
        <select className='dropdown selector'>
          <option value="genres">All Genres</option>
          {dropdownList}
        </select>
    </nav>
  )
}

export default Nav;

