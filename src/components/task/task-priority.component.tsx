export default function TaskPriority({ priority }: { priority?: string }) {
  return <div className="flex items-center justify-center text-xs font-bold bg-[#ff7a90] p-[5px] px-3 rounded-2xl border-2 border-black">{priority}</div>
}