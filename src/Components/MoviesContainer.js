import '../SCSS/MoviesContainer.css'
import MovieCard from './MovieCard';

const MoviesContainer = ({movies}) => {
  const movieList = movies.map((movie, index) => {
    return <MovieCard 
      img={movie.poster_path}
      title={movie.title}
      key={index}
    />
  })

  return (
    <section className='movies-container'>
      {movieList}
    </section>
  )
}

export default MoviesContainer;