import '../SCSS/MoviesContainer.css';
import MovieCard from './MovieCard';
import FilteredCard from './FilteredCard';
import { useState } from 'react';

const Search = ({ movies, setSpecificMovie, getSingleMovieDetails, addToWatchList, setSearchValue, watchList, removeFromWatchList, showSpecificMovie, setIsSearching, isSearching, searchValue }) => {
const [searchPhrase, setSearchPhrase] = useState('')
  const [filteredData, setFilteredData] = useState([]);
  
//  const handleFilter = (event) => {
//   console.log(event)
//     setIsSearching(true)
//     const searchPhrase = event.target.value
//     setSearchPhrase(searchPhrase);
//     const newFilter = movies.filter((movie) => {
//       return movie.title.toLowerCase().includes(searchPhrase.toLowerCase())
//     })
//     if (searchPhrase === '') {
//       setFilteredData([])
//       setIsSearching(false)
//     } else {
//       setFilteredData(newFilter)
//     }   
//   }

    // const noResultsMessage = <div>That title not available, please try your search again.</div>


    // const filteredMovies = filteredData.map((movie, index) => {
    //   return (
    //     <FilteredCard 
    //       img={movie.poster_path}
    //       key={index}
    //       id={movie.id}
    //       getSingleMovieDetails={getSingleMovieDetails}
    //       addToWatchList={addToWatchList}
    //       // isOnWatchList={isOnWatchList}
    //       // removeFromWatchList={removeFromWatchList}
    //     />
    //   )
    // })


  return (
    <section className='movie-search-bar'>
       <input 
        className='search-bar-input selector'
        type='text'
        placeholder='Search by title...'
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
      />
       {/* <div className='search-results'>
          {filteredData.length > 0 && filteredMovies}
          {(filteredData.length === 0 && isSearching) && noResultsMessage}
        </div>
      {movieList} */}
    </section>
  )
};

export default Search;