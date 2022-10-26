import { useState, useEffect } from "react";
import Container from "./Container";

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setAllTodos(json), setLoader(false));
  }, []);

  return (
    <div className="App">
      <Container allTodos={allTodos} Loader={Loader} />
    </div>
  );
}

export default App;
