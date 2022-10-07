import { useState } from 'react';
import '../SCSS/Banner.css';
import BannerCard from './BannerCard';


const Banner = ( { video } ) => {
  console.log('video PARAM', video)

  const [newBanner, setNewBanner] = useState(null)
 
// console.log("MOVIES PROP", movies)
  //  let random = [movies[Math.floor(Math.random() * movies.length)]]
  //  console.log("RANDOM", random)
  // let random;

  const setRandomMovieBanner = video.videos.results.map((video) => {
    return <BannerCard 
      videoKey={video.key}
      key={video.id}
    />
    })

  return (
    <section className='banner-section'>
      <h1>{video.title}</h1>
      {setRandomMovieBanner}
    </section>
  )
}

export default Banner;

