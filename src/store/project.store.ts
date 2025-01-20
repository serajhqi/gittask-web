import { createStore, select, withProps } from "@ngneat/elf";
import { ProjectDTO } from "../api/types";
import { GetApi } from "../api/api";
import {
  excludeKeys,
  localStorageStrategy,
  persistState,
} from "@ngneat/elf-persist-state";

interface ProjectState {
  ProjectsLoading: boolean;
  Projects?: ProjectDTO[] | null;
  ProjectsTotal?: number;
  SelectedProject?: ProjectDTO;
}

const defaultState: ProjectState = {
  ProjectsLoading: false,
};

const store = createStore(
  { name: "project" },
  withProps<ProjectState>(defaultState),
);

export const persist = persistState(store, {
  key: "project",
  storage: localStorageStrategy,
  source: () =>
    store.pipe(excludeKeys(["ProjectsLoading", "Projects", "ProjectsTotal"])),
});
// -----------------------------------------
class ProjectRepo {
  projectsLoading$ = store.pipe(select((state) => state.ProjectsLoading));
  projects$ = store.pipe(select((state) => state.Projects));
  projectsTotal$ = store.pipe(select((state) => state.ProjectsTotal));
  selectedProject$ = store.pipe(select((state) => state.SelectedProject));

  getSelectedProject = () => store.query((state) => state.SelectedProject);

  async GetProjects(offset: number = 0, limit: number = 10) {
    store.update((state) => ({ ...state, ProjectsLoading: true }));
    store.update((state) => ({ ...state, ProjectsLoading: true }));
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
        ProjectsTotal: data?.total,
        Projects: [...(state.Projects || []), ...(data?.items || [])]
          //deduplicate
          .reduce<ProjectDTO[]>((acc, current) => {
            if (!acc.some((item) => item.id == current.id)) {
              acc.push(current);
            }
            return acc;
          }, []),
      }));
    } finally {
      store.update((state) => ({ ...state, ProjectsLoading: false }));
    }
  }

  SetSelected(project: ProjectDTO) {
    store.update((state) => ({ ...state, SelectedProject: project }));
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
