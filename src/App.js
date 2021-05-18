import './App.css';
import Stat from './Components/Stat';
import Func from "./Components/Func";
import EventClick from "./Components/EventClick";
import { ClassClick } from "./Components/ClassClick";
import EventBind from './Components/EventBind';
import ListRendering from './Components/ListRendering';
function App() {
  return (
    <div className="App">
     {/* <Stat  inc='5'/>
     <Func name="lakhan"/> */}
     {/* <EventClick/>
     <ClassClick/> */}


    <EventBind/>
    <ListRendering/>
    </div>
  );
}

export default App;
