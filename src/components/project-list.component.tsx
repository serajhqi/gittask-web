import { useState } from "react";
import LoadMore from "./load-more.component";
import ProjectItem from "./project/project-item.component";

export default function ProjectList() {
  const [count, setCount] = useState(2)

  return <div className="flex flex-col border-2 border-black rounded-2xl ">
    {new Array(count).fill(0).map((_, idx) =>
      <div key={idx} className="border-b-2 border-black last:border-b-0 hover:bg-amber-50 first:rounded-t-2xl">
        <ProjectItem />
      </div>)
    }
    <div className="p-2 bg-red-100 flex justify-end rounded-b-2xl">
      <LoadMore loading={false} onClick={() => setCount(count + 2)} />
    </div>
  </div>
}