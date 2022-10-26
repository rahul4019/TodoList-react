import InputBox from "./InputBox";
import TaskContainer from "./TasksContainer";

function Container(props) {
  const { allTodos, Loader } = props;

  return (
    <div className="todo-container d-flex flex-column   align-items-center justify-content-evenly mx-2  rounded  p-2">
      <InputBox />
      <TaskContainer allTodos={allTodos} Loader={Loader} />
    </div>
  );
}

export default Container;
