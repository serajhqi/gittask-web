import ActivityList from "../components/activity-list.component";
import ProjectList from "../components/project-list.component";
import TaskDetails from "../components/task/task-details.component";
import TaskList from "../components/task-list.component";
import ActivityDetails from "../components/activity/activity-details.component";

// src/pages/Home.tsx
export default function Home() {
  return <h1 className="flex gap-4 h-[calc(100vh-34px)] p-6">
    <div className="w-56 h-full gap-4 flex flex-col">
      <ProjectList />
    </div>
    <div className="w-80 h-full gap-4 flex flex-col">
      <TaskList />
    </div>
    <div className="w-80 flex-1 h-full gap-4 flex flex-col">
      <div className="flex h-56 border-2 border-black rounded-2xl bg-white">
        <div className="w-80 h-full">
          <TaskDetails />
        </div>
        <div className="border-l-2 border-gray-500 border-dashed"></div>
        <ActivityDetails />
      </div>
      <ActivityList />
    </div>
  </h1>;
}