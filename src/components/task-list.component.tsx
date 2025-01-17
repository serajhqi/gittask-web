import TaskItem from "./task-item.component";

export default function TaskList() {
  return <div className="flex flex-col gap-2">
    {new Array(10).fill(0).map((_, idx) => <TaskItem key={idx} />)}
  </div>
}