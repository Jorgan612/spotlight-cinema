// import { useState } from 'react';
import '../SCSS/Banner.css';
import BannerCard from './BannerCard';


const Banner = ( {movies} ) => {
console.log("MOVIES PROP", movies)
   let random = [movies[Math.floor(Math.random() * movies.length)]]
   console.log("RANDOM", random)

   const setRandomMovieBanner = random.map((movie) => {
    console.log("RANDOM MOVIE", movie)

    return <BannerCard 
      title={movie.original_title}
    />
   })

  return (
    <section className='banner-section'>
      {setRandomMovieBanner}
    </section>
  )
}

export default Banner;

