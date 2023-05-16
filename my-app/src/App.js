import {useEffect, useState} from "react" ;

// then보다는 async-await를 더 보편적으로 사용한다.
// 첫번째로 setMovies하고 setLoading을 두번째로 했기 때문에 로그에 두번 찍힌다.
// 리스트에 있는 걸 화면에 보이려면 map을 사용해야 한다.
// 로딩 중이 아니라면 movie를 보여준다. map은 array의 item을 가져와 변형시켜 새 array를 만듦.
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [])
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
       ) : (
        <div>
          {movies.map(movie => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}></img>
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            ))}
          </div>
        )}
    </div>
  );
}

export default App;
