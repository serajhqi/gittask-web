import { useEffect, useState } from "react";
import LoadMore from "./load-more.component";
import ProjectItem from "./project/project-item.component";
import { useObservable } from "@ngneat/react-rxjs";
import { GetProjectRepo } from "../store/project.store";

const DEFAULT_LIMIT = 2;
const DEFAULT_INCREMENT = 2;
export default function ProjectList() {

  const [projects] = useObservable(GetProjectRepo().projects$)
  const [total] = useObservable(GetProjectRepo().total$)
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    GetProjectRepo().GetProjects(offset, DEFAULT_LIMIT)
  }, [offset])


  return <div className="flex flex-col border-2 border-black rounded-2xl bg-white overflow-auto h-fit no-scrollbar">
    {projects?.map((project) =>
      <div key={project.id} className="border-b-2 border-black last:border-b-0 hover:bg-amber-50 first:rounded-t-2xl">
        <ProjectItem project={project} />
      </div>)
    }
    <div className="p-2 bg-red-100 flex justify-end rounded-b-2xl">
      <LoadMore loading={false} onClick={() => setOffset(offset + DEFAULT_INCREMENT)} disabled={total == projects?.length} />
    </div>
  </div>
}