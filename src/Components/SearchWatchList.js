import { useState } from "react";

// https://www.jsdiaries.com/how-to-loop-through-localstorage-in-javascript/
// https://attacomsian.com/blog/javascript-iterate-over-local-storage-keys
// https://javascript.info/localstorage


const SearchWatchList = ({ watchList, watchListMovies, setIsSearching }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    setIsSearching(true)
    const searchWord = event.target.value;
    setWordEntered(searchWord);
  
    const newFilter = watchListMovies.filter((film) => {

      return film.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
      setIsSearching(false)
    } else {
      setFilteredData(newFilter)
    }   
  }

    // const noResultsMessage = <div>That is not available, please try your search again.</div>


    const filteredCards = filteredData.map((data) => {
      return (
        <div className="results-card">
         
          <h1>{data.title}</h1>
       
       
        </div>
      )
    })
      
  return (
    <div className='search'>
      <div className='search-inputs'>
        <input 
        type='text'
        placeholder='🔎 Search Watchlist'
        value={wordEntered}
        onChange={handleFilter}
        />
        <div className='search-results'>
          {filteredData.length > 0 && filteredCards}
          {/* {(filteredData.length === 0 && isSearching) && noResultsMessage} */}
        </div>
      </div>
    </div>
  )
}

export default SearchWatchList;

