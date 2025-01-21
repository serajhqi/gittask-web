import TaskItem from "./task/task-item.component";
import LoadMore from "./load-more.component";
import { useObservable } from "@ngneat/react-rxjs";
import { GetTaskRepo } from "../store/task.store";

export default function TaskList() {
  const [tasks] = useObservable(GetTaskRepo().tasks$)
  const [total] = useObservable(GetTaskRepo().tasksTotal$)

  return <div className="flex flex-col border-2 border-black rounded-2xl bg-white overflow-auto h-fit no-scrollbar">
    {tasks?.map((task) =>
      <div key={task.id} className="border-b-2 border-gray-500 border-dashed first:rounded-t-2xl hover:bg-green-100">
        <TaskItem task={task} />
      </div>
    )}
    <div className="p-2 bg-red-100 flex justify-end rounded-b-2xl">
      <LoadMore loading={false} onClick={() => GetTaskRepo().setOffset(GetTaskRepo().getOffset() + 3)} disabled={tasks?.length == total} />
    </div>
  </div>
}