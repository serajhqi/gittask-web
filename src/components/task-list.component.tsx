import TaskItem from "./task-item.component";

export default function TaskList() {
  return <div className="flex flex-col gap-2">
    {new Array(20).fill(0).map((_, idx) =>
      <div key={idx} className="border-b-2 border-gray-500 border-dashed last:border-0">
        <TaskItem />
      </div>
    )}
  </div>
}