import Task from "../../components/Task/Task";
import useDataFetching from "../../hooks/useDataFetching";
import "./Backlog.css";

const tasksSource = "http://localhost:3000/tasks";

function Backlog() {
  const [loading, error, tasks] = useDataFetching(tasksSource);

  return (
    <div className="Backlog-wrapper">
      <h2>Backlog</h2>
      <div className="Tasks-wrapper">
        {loading || error ? (
          <span>{error || "Loading..."}</span>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} title={task.title} body={task.body} />
          ))
        )}
      </div>
    </div>
  );
}

export default Backlog;
