import { createStore, select, withProps } from "@ngneat/elf";
import { TaskDTO } from "../api/types";
import {
  excludeKeys,
  localStorageStrategy,
  persistState,
} from "@ngneat/elf-persist-state";
import { GetApi } from "../api/api";
import { GetProjectRepo } from "./project.store";

interface TaskState {
  SelectedTask?: TaskDTO;
  Tasks?: TaskDTO[] | null;
  TasksTotal?: number;
  TasksLoading: boolean;
}

const defaultState: TaskState = {
  TasksLoading: false,
};

const store = createStore({ name: "task" }, withProps<TaskState>(defaultState));
export const persist = persistState(store, {
  key: "task",
  storage: localStorageStrategy,
  source: () =>
    store.pipe(excludeKeys(["TasksLoading", "Tasks", "TasksTotal"])),
});
// ---------------------------------
class TaskRepo {
  tasks$ = store.pipe(select((state) => state.Tasks));
  tasksTotal$ = store.pipe(select((state) => state.TasksTotal));
  tasksLoading$ = store.pipe(select((state) => state.TasksLoading));
  selectedTask$ = store.pipe(select((state) => state.SelectedTask));

  constructor() {
    // GetProjectRepo().selectedProject$.subscribe((project) => {
    //   console.log({ project });
    //   if (project?.id) {
    //     this.wipeTasks();
    //     this.getTasks();
    //   }
    // });
  }

  setSelected(task: TaskDTO) {
    store.update((state) => ({ ...state, SelectedTask: task }));
  }

  async getTasks(offset: number = 0, limit: number = 10) {
    store.update((state) => ({ ...state, TasksLoading: true }));
    const project_id = GetProjectRepo().getSelectedProject()?.id;
    if (!project_id) {
      alert("not project selected");
      return;
    }
    try {
      const { data } = await GetApi().GET("/projects/{project_id}/tasks", {
        params: {
          path: {
            project_id,
          },
          query: {
            offset,
            limit,
          },
        },
      });
      store.update((state) => ({
        ...state,
        TasksTotal: data?.total,
        Tasks: [...(state.Tasks || []), ...(data?.items || [])]
          //deduplicate
          .reduce<TaskDTO[]>((acc, current) => {
            if (!acc.some((item) => item.id == current.id)) {
              acc.push(current);
            }
            return acc;
          }, []),
      }));
    } finally {
      store.update((state) => ({ ...state, TasksLoading: false }));
    }
  }
  wipeTasks() {
    store.update((state) => ({ ...state, Tasks: undefined }));
  }
}
// ---------------------------------
let taskRepo: TaskRepo;
export function GetTaskRepo() {
  if (!taskRepo) {
    taskRepo = new TaskRepo();
  }
  return taskRepo;
}
