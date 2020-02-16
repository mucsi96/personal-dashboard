import React from "react";
import { useTasks } from ".";

export function TaskList() {
  const [tasks, error] = useTasks();

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (tasks) {
    return (
      <ul>
        {tasks.map(task => (
          <li>
            {task.name} : {task.status}
          </li>
        ))}
      </ul>
    );
  }

  return <span>{"Loading..."}</span>;
}
