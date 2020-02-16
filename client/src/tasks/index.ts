import { useResource } from "../core/useResource";

export enum TaskStatus {
  NEW = "NEW",
  PROGRESS = "PROGRESS",
  DONE = "DONE"
}

export type Task = {
  id: number;
  name: string;
  status: TaskStatus;
};

export function useTasks(): [Task[] | undefined, Error | undefined] {
  return useResource<Task[]>({ url: "/api/tasks" });
}
