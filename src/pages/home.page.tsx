import ActivityList from "../components/activity-list.component";
import ProjectList from "../components/project-list.component";
import TaskList from "../components/task-list.component";

// src/pages/Home.tsx
export default function Home() {
  return <h1 className="flex gap-4">
    <div className="w-48">
      <ProjectList />
    </div>
    <div className="w-80 ">
      <TaskList />
    </div>
    <div className="w-80">
      <ActivityList />
    </div>
  </h1>;
}