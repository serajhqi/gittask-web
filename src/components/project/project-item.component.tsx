import { Button } from "rsuite";
import { ProjectDTO } from "../../api/types";
import { GetProjectRepo } from "../../store/project.store";

export default function ProjectItem({ project, selected }: { project?: ProjectDTO, selected?: boolean }) {
  return <div className={`flex gap-3 p-3 justify-between items-center hover:bg-green-50 h-16 ${selected ? "bg-green-100" : ""}`}>
    <div className="font-medium">{project?.name}</div>
    <div className="text-xs text-left whitespace-nowrap text-ellipsis overflow-hidden min-w-64">
      {project?.description}
    </div>
    <Button appearance="primary" onClick={() => project && GetProjectRepo().SetSelected(project)} disabled={selected}>Select</Button>
  </div>
}