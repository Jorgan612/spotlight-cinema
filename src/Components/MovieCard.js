import '../SCSS/MovieCard.css'

const MovieCard  = ({img, title}) => {
  
  return (
    <div className='movie-card'>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt='movie poster'/>
    </div>
    
  )
}

export default MovieCard;