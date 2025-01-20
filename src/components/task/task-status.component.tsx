export default function TaskStatus({ status }: { status?: string }) {
  return <div className="text-xs font-bold p-2 border-2 border-black rounded-2xl bg-white">{status}</div>
}