import TaskCard from "./TaskCard";


function TaskContainer(props) {
  const { allTodos, Loader, filterTodos } = props;

  return (
    <div className="task-container d-flex flex-column rounded px-2 py-2 overflow-auto">
      {Loader ? (
        <div className="loader m-auto"></div>
      ) : (
        allTodos.map((todo) => (
          <TaskCard
            key = {todo.id}
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
            filterTodos={filterTodos}
          />
        ))
      )}
    </div>
  );
}

export default TaskContainer;
