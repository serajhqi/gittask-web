import { ProjectDTO } from "../../api/types";

export default function ProjectItem({ project }: { project?: ProjectDTO }) {
  return <div className="flex flex-col gap-3 p-3 cursor-pointer">
    <div className="text-sm font-medium">{project?.name}</div>
    <div className="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
      {project?.description}
    </div>
  </div>
}