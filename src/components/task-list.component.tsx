import { useState } from "react";
import TaskItem from "./task/task-item.component";
import LoadMore from "./load-more.component";

export default function TaskList() {
  const [count, setCount] = useState(3)

  return <div className="flex flex-col border-2 border-black rounded-2xl">
    {new Array(count).fill(0).map((_, idx) =>
      <div key={idx} className="border-b-2 border-gray-500 border-dashed first:rounded-t-2xl hover:bg-green-100">
        <TaskItem />
      </div>
    )}
    <div className="p-2 bg-red-100 flex justify-end rounded-b-2xl">
      <LoadMore loading={false} onClick={() => setCount(count + 3)} />
    </div>
  </div>
}