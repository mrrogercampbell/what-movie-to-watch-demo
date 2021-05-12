import { useEffect, useState } from 'react'
import MovieGallery from './components/MovieGallery'
import Header from './components/Header'
import './style/styles.css'

function App() {
  const [movieData, setMovieData] = useState([])

  const fetchMovieData = (searchedValue, selectedTypeValue = null
  ) => {
    let URL = `https://www.omdbapi.com/?apikey=47fad17f&t=${searchedValue}&type=${selectedTypeValue}`

    fetch(URL)
      .then(res => res.json())
      .then(jsonData => setMovieData(jsonData))
  }

  useEffect(() => {
    fetchMovieData('star wars')
  }, [])

  return (
    <div className="App">
      <Header fetchMovieData={fetchMovieData} />
      <MovieGallery title={'Current Search'} movieData={movieData} recentGallery={false} />
      <MovieGallery title={'Previous 3 Searches'} movieData={movieData} recentGallery={true} />
    </div>
  );
}

export default App;