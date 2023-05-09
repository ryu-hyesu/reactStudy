import {useState} from "react" ;

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  
  // react.js는 함수를 보낼 때 현재 state를 첫번째 매개변수로 받는다.
  // 현재 toDo를 받아와 새로운 toDos의 array로 return 
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "")
      return;
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
  };

  // map으로 함수의 첫번쨰 argument로 현재의 item을 가져올 수 있따.
  // map의 item들은 순서대로 return
  // 동작할 때마다 새로운 버전의 toDos를 기준으로 동작한다.
  // 그러나 console에서 같은 compenent의 list를 render할 때 key라는 prop를 넣어야 한다는 오류가 뜬다.
  // react가 list에 있는 모든 item을 인식하기 때문에 생기는 오류
  // 값이 추가될 떄마다 <li>가 하나씩 추가됨.
  return (
    <div>
      <form onSubmit={onSubmit}> 
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do6.." 
        />
        <button>Add to do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))
    }
    </div>
  );
}

export default App;
