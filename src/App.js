import './App.css';
import BQuestionsList from './components/BQuestionsList';
import {Route, Routes} from "react-router-dom";
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<Login/>}/>
        <Route strict exact path="/bquestions" element={<BQuestionsList/>}/>

      </Routes>
    </div>
  );
}

export default App;
