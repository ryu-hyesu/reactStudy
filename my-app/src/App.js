import {useEffect, useState} from "react" ;

// https://api.coinpaprika.com/v1/tickers
// 컴포넌트가 가장 처음 render됐을 때 이 coin들을 실행해보자

// Effect를 한 번만 사용하고 싶기 때문에 어떤 것도 의존하지 않기 위해 [] 상태로 놔둠.
// respons로 부터 json을 추출하고 싶음.
// 이후 이 data를 어떻게 컴포넌트에서 보여줄 수 있는가?
// useState를 사용하여 컴포넌트에 추가시키고, 이후 loading값을 false로 바꿔준다.
// coin 내부에 이미 key가 있기 때문에 map에 key추가 안 해도 됨.
// coins에 기본값을 미리 지정해주어야 컴파일 오류가 생기지 않는다.
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : (
        <select>
        {coins.map((coin) => 
        <option>
          {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
        </option>
      )}
        </select>
      )}
      
    </div>
  );
}

export default App;
