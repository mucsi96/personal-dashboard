import { useResource } from "../core/useResource";

export enum TaskStatus {
  PENDING = "PENDING",
  PROGRESS = "PROGRESS",
  DONE = "DONE"
}

export type Task = {
  id: number;
  name: string;
  status: TaskStatus;
  dueDate: string;
  progress: number;
};

export function useTasks(): [Task[] | undefined, Error | undefined] {
  return useResource<Task[]>({ url: "/api/tasks" });
}
