

// 라우터는 두가지 종류가 있음 1. hash 2. broweser
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import React from 'react';

// component 사용!
// 키는 react.js에서만, map안에서 component를 render할 때 필요
// we want to change pages -> react-router
// 스크린 단위(라우터별로)로 생각해야 함.
// 따라서 home라우터를 보여주고 모든 걸 보여준 뒤 movie router를 두고 그ㅡ곳에는 영화 하나만.

// App는 더이상 기능은 없고, router을 render함.
// router는 URL을 보고 있는 COMPONENT

// URL을 받아 switch(현재는 Routes로 바꼈음.)로 Route를 찾으면 컴포넌트를 렌더링함.
import { BrowserRouter as Router, Routes, Route, link } from "react-router-dom";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;