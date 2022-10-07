// import YouTubePlayer from 'react-player/lib/players/YouTube'
import ReactPlayer from "react-player";


const BannerCard = ( {videoKey} ) => {
  return (
    <ReactPlayer
  url={`https://www.youtube.com/watch?v=${videoKey}`}
/>
    
  )
}

export default BannerCard;