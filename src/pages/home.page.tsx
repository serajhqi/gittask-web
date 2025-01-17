import ActivityList from "../components/activity-list.component";
import ProjectList from "../components/project-list.component";
import TaskList from "../components/task-list.component";

// src/pages/Home.tsx
export default function Home() {
  return <h1 className="flex gap-10">
    <ProjectList />
    <TaskList />
    <ActivityList />
  </h1>;
}