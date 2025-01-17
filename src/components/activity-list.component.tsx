import ActivityItem from "./activity-item.component";

export default function ActivityList() {
  return <div className="flex flex-col gap-2">
    {new Array(10).fill(0).map((_, idx) => <ActivityItem key={idx} />)}
  </div>
}