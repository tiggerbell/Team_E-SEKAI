import './App.css';
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Main from './components/Main';



function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App
