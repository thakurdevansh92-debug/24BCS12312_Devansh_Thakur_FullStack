import { useReducer, useState } from "react";

const initialTasks = [
  { id: 1, title: "Finish DBMS assignment", completed: false },
  { id: 2, title: "Revise React hooks", completed: false },
  { id: 3, title: "Submit lab report", completed: true },
];

function reducer(state, action) {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;

    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}

function TaskManager() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <h1>My Tasks</h1>

      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button
        onClick={() => {
          if (newTask.trim() !== "") {
            dispatch({
              type: "ADD_TASK",
              payload: newTask,
            });

            setNewTask("");
          }
        }}
      >
        Add Task
      </button>

      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() =>
              dispatch({
                type: "TOGGLE_TASK",
                payload: task.id,
              })
            }
          />

          <span>{task.title}</span>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_TASK",
                payload: task.id,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskManager;