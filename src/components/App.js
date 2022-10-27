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

  // filters the deleted Todo and sets the "allTodos"
  const filterTodos = (todoId) => {
    let newTodos = allTodos.filter((todo) => todo.id != todoId);
    setAllTodos(newTodos);
  };

  return (
    <div className="App">
      <Container
        allTodos={allTodos}
        Loader={Loader}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
