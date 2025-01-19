import { createStore, select, withProps } from "@ngneat/elf";
import { ProjectDTO } from "../api/types";
import { GetApi } from "../api/api";
import {
  excludeKeys,
  localStorageStrategy,
  persistState,
} from "@ngneat/elf-persist-state";

interface ProjectState {
  projectsLoading: boolean;
  projects?: ProjectDTO[] | null;
  total?: number;
  selected?: ProjectDTO;
}

const defaultState: ProjectState = {
  projectsLoading: false,
};

const store = createStore(
  { name: "project" },
  withProps<ProjectState>(defaultState),
);

export const persist = persistState(store, {
  key: "project",
  storage: localStorageStrategy,
  source: () =>
    store.pipe(excludeKeys(["projectsLoading", "projects", "total"])),
});
// -----------------------------------------
class ProjectRepo {
  projectsLoading$ = store.pipe(select((state) => state.projectsLoading));
  projects$ = store.pipe(select((state) => state.projects));
  total$ = store.pipe(select((state) => state.total));
  selected$ = store.pipe(select((state) => state.selected));

  async GetProjects(offset: number = 0, limit: number = 10) {
    store.update((state) => ({ ...state, projectsLoading: true }));
    try {
      const { data } = await GetApi().GET("/projects", {
        params: {
          query: {
            limit,
            offset,
          },
        },
      });
      store.update((state) => ({
        ...state,
        total: data?.total,
        projects: [...(state.projects || []), ...(data?.items || [])]
          //deduplicate
          .reduce<ProjectDTO[]>((acc, current) => {
            if (!acc.some((item) => item.id == current.id)) {
              acc.push(current);
            }
            return acc;
          }, []),
      }));
    } finally {
      store.update((state) => ({ ...state, projectsLoading: false }));
    }
  }

  SetSelected(project: ProjectDTO) {
    store.update((state) => ({ ...state, selected: project }));
  }
}

// -----------------------------------------
let projectRepo: ProjectRepo;
export function GetProjectRepo(): ProjectRepo {
  if (!projectRepo) {
    projectRepo = new ProjectRepo();
  }
  return projectRepo;
}
