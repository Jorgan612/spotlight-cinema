import '../CSS/MoviesContainer.css';
import '../CSS/Search.css'

const Search = ({ setSearchValue, searchValue }) => {
  return (
    <section className='movie-search-bar'>
       <input 
        className='search-bar-input selector'
        type='text'
        placeholder='Search by title...'
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
      />
    </section>
  )
};

export default Search;