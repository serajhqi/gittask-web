import ProjectItem from "./project-item.component";

export default function ProjectList() {
  return <div className="flex flex-col gap-2">
    {new Array(10).fill(0).map((_, idx) => <ProjectItem key={idx} />)}
  </div>
}