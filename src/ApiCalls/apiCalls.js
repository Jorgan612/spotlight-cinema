import App from '../Components/App.js';

export const getVideo = async () => {
  // const url = `https://api.themoviedb.org/3/movie/550/videos?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US`

  const url = `https://api.themoviedb.org/3/movie/550?api_key=eb5e7e86d8d7c0c5c8fe773faa42a22e&language=en-US&append_to_response=videos`
  // setError()

  try {
    const response = await fetch(url);
    const video = await response.json();
    // setVideo
  } catch(error) {
    // setError(error.message);
    console.log(error.message);
  }
}