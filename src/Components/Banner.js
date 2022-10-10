import '../SCSS/Banner.css';
import ReactPlayer from "react-player";

const Banner = ( { video } ) => {
  console.log('video prop', video)
  console.log('video at index 0', video.videos.results[0].key)
  // const videoKey = video.videos.results[0].key
  return (
      <section className='banner-section'>
        <ReactPlayer 
          className='player-wrapper'
          url={`https://www.youtube.com/watch?v=${video.videos.results[0].key}`}
          width='40%'
          height='100%'
        />
      </section>
  )
}

export default Banner;

