import logo from "./logo.svg";
import "./App.css";
import { Students } from "./components/Students.js";
import data from "./utils/DataStudents";

function App() {
  return (
    <div className="App">
      <Students data={data} />
    </div>
  );
}

export default App;
