import '../SCSS/Nav.css';
import { Link } from 'react-router-dom';
import spotlight from '../icons/spotlight.png';
import homepage from '../icons/homepage.png'

const Nav = ({ genres, showGenreMovies, setSearchValue }) => {

  const handleClick = () => {
    setSearchValue('')
  }

  const dropdownList = genres.map((genre) => {
      return <option key={genre.id} id={genre.id} value={genre.id}>{genre.name}</option>
    })
    
  return (
    <nav className='nav'>
      <h1 className='app-title'>Spotlight Cinema</h1>
      <img className='spotlight-logo' src={spotlight}/>
      <div className='watchlist-genre-container'>
        <Link to='/watchlist'>
          <button className='selector watchlist-btn' onClick={handleClick}>Watchlist</button>
        </Link>
        <Link to='/genres'>
          <select className='dropdown selector' onChange={event => showGenreMovies(event.target.value)}>
          <option value="genres">All Genres</option>
          {dropdownList}
         </select>
        </Link>
        <Link to='/'>
          <img className='return-home-btn' src={homepage}></img>
        </Link>
      </div>
    </nav>
  )
};

export default Nav;

