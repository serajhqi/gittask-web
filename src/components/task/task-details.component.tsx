import { useObservable } from "@ngneat/react-rxjs"
import { GetTaskRepo } from "../../store/task.store"
import TaskWeight from "./task-weight.component"
import TaskPriority from "./task-priority.component"
import TaskStatus from "./task-status.component"

export default function TaskDetails() {
  const [task] = useObservable(GetTaskRepo().selectedTask$)
  return <div className="p-6 h-full w-full">{
    task ?
      <div className="flex flex-col gap-1">
        <div>
          {task.title}
        </div>
        <div>
          {task.description}
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-2">
            <TaskStatus status={task?.status} />
            <TaskPriority priority={task?.priority} />
          </div>
          <TaskWeight weight={8} />
        </div>
      </div>
      :
      <div className="flex items-center justify-center">
        No Task Selected
      </div>
  }
  </div>
}