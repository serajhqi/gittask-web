export default function TaskWeight({ weight }: { weight?: number }) {
  return <div className="flex items-center justify-center text-sm font-bold h-9 w-9 border-2 border-black rounded-2xl bg-[#50c0ea]">{weight}</div>
}