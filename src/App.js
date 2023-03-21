import './App.css';
import BQuestionsList from './components/BQuestionsList';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<BQuestionsList/>}/>
      </Routes>
    </div>
  );
}

export default App;
