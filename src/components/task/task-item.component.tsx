import TaskStatus from "./task-status.component";
import TaskWeight from "./task-weight.component";
import TaskPriority from "./task-priority.component";

export default function TaskItem() {
  return <div className="flex flex-col p-6 gap-2 cursor-pointer">
    <div className="font-extrabold">Research cashback payment</div>
    <div className="text-xs text-ellipsis py-2 h-8 whitespace-nowrap overflow-hidden">Analytic consumption  Analytic  behaviour Analytic consumption behaviour Analytic consumption  Analytic consumption behaviour</div>
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <TaskStatus />
        <TaskPriority />
      </div>
      <TaskWeight />
    </div>
  </div>
}