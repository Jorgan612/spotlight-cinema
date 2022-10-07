import '../SCSS/Banner.css';
import BannerCard from './BannerCard';

const Banner = ( { video } ) => {
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

