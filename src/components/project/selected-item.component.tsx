import { useObservable } from "@ngneat/react-rxjs";
import { GetProjectRepo } from "../../store/project.store";

export default function SelectedProject() {

  const [selected] = useObservable(GetProjectRepo().selectedProject$)

  return selected && <div className="border-2 border-black rounded-2xl flex gap-5 p-3  justify-around items-center h-14 mb-2">
    <div className="font-medium">{selected?.name}</div>
    <div className="text-xs text-right whitespace-nowrap text-ellipsis overflow-hidden">
      {selected?.description}
    </div>
  </div>
}