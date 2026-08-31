import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startedAt: number;
  CompletedAt: number | null;
  interruptedAt: number | null;
  type: keyof TaskStateModel['config'];
}