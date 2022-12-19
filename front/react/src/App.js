import React from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Page/Main";
import {Routes, Route} from 'react-router-dom';
// import useWeb3 from './hooks/useWeb3';




function App() {
  // const [web3, account] = useWeb3();

  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path="/"
          element={ <Main />}/>
      </Routes>
     
    </div>
  );
}

export default App;
