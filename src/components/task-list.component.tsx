import { useEffect, useState } from "react";
import TaskItem from "./task/task-item.component";
import LoadMore from "./load-more.component";
import { useObservable } from "@ngneat/react-rxjs";
import { GetTaskRepo } from "../store/task.store";
import { GetProjectRepo } from "../store/project.store";

const DEFAULT_LIMIT: number = 3;
const DEFAULT_OFFSET: number = 0;
export default function TaskList() {
  const [tasks] = useObservable(GetTaskRepo().tasks$)
  const [selectedProject] = useObservable(GetProjectRepo().selectedProject$)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (offset > DEFAULT_OFFSET)
      GetTaskRepo().getTasks(offset, DEFAULT_LIMIT)
  }, [offset])

  useEffect(() => {
    setOffset(DEFAULT_OFFSET)
    GetTaskRepo().wipeTasks()
    GetTaskRepo().getTasks(offset, DEFAULT_LIMIT)
  }, [selectedProject])

  return <div className="flex flex-col border-2 border-black rounded-2xl bg-white overflow-auto h-fit no-scrollbar">
    {tasks?.map((task) =>
      <div key={task.id} className="border-b-2 border-gray-500 border-dashed first:rounded-t-2xl hover:bg-green-100">
        <TaskItem task={task} />
      </div>
    )}
    <div className="p-2 bg-red-100 flex justify-end rounded-b-2xl">
      <LoadMore loading={false} onClick={() => setOffset(offset + 3)} />
    </div>
  </div>
}