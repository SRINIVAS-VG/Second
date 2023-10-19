import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <h1>Task Management</h1>
      <div>
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
