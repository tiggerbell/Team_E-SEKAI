import React from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Page/Main";
import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route 
          path="/"
          element={ <Main />}/>
      </Routes>
     
    </div>
  );
}

export default App;
