export default function ActivityItem() {
  return <div className="flex gap-3 p-3 justify-between items-center cursor-pointer">
    <div>[3902]</div>
    <div className="text-ellipsis whitespace-nowrap overflow-hidden max-w-48 font-medium">Activity Title</div>
    <div className="text-ellipsis whitespace-nowrap overflow-hidden max-w-56">Description of the activity Description of the activity Description of the activity</div>
    <div className=" hover:underline cursor-pointer font-medium underline underline-offset-8">2h 25m</div>
    <a className="text-blue-600 font-medium underline cursor-pointer underline-offset-8">0cs3sdf23</a>
  </div>
}