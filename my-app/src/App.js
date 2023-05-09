import {useState} from "react" ;

function App() {
  // setToDo는 toDo를 수정하는 함수
  // toDo는 input과 연결
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "")
      return;
    setToDo("");
  };

  console.log(toDo);
  // form이 submit event를 가지고 있기 때문에 button을 누르면 submit이 된다.
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
