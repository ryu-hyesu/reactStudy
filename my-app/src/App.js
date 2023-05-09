import {useState} from "react" ;

function App() {
  // submit한 값을 가져와 array로 추가하는 법

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  
  // 기존 js라면 setToDo.push를 했겠지만, jsx에서는 state를 직접 수정하지 않는다.
  // 직접 수정하는 대신 함수를 사용한다.

  // array를 직접 수정하지 않으면서 setToDos로 array에 element를 추가하는 방법
  // currentArray / currentToDos를 받아오고, 새로운 array를 return한다. 
  // 이때 array에 그냥 array를 추가하게 되면 원소가 array가 되지 원소자체들이 들어오지 않는다.
  // 따라서 array의 원소들을 새로운 array에 추가하고 싶다면 ...이라는 문법을 사용해야 한다.
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "")
      return;
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray]);
  };

  console.log(toDos);
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
    </div>
  );
}

export default App;
