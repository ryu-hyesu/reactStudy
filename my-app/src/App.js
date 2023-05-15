import {useEffect, useState} from "react" ;

// then보다는 async-await를 더 보편적으로 사용한다.
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    ).json());
    
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    
  }, [])
  console.log(movies);
  return (
    <div>
      {loading ? <h2>Loading...</h2> : null}
    </div>
  );
}

export default App;
