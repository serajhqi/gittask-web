import TaskStatus from "./task-status.component";
import TaskWeight from "./task-weight.component";
import TaskPriority from "./task-priority.component";
import { TaskDTO } from "../../api/types";

export default function TaskItem({ task, onClick }: { task?: TaskDTO, onClick?: () => void }) {
  return <div className={`flex flex-col p-6 gap-2 cursor-pointer `} onClick={onClick}>
    <div className="font-extrabold">{task?.title}</div>
    <div className="text-xs text-ellipsis py-2 h-8 whitespace-nowrap overflow-hidden">{task?.description}</div>
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <TaskStatus status={task?.status} />
        <TaskPriority priority={task?.priority} />
      </div>
      <TaskWeight weight={8} />
    </div>
  </div>
}