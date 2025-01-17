export default function ProjectItem() {
  return <div className="flex flex-col gap-3 p-3 hover:bg-amber-50 cursor-pointer">
    <div className="text-sm font-medium">Definitions 02</div>
    <div className="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
      A description for this project goes here
    </div>
  </div>
}