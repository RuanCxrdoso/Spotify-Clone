import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function TopBar() {
  return (
    <div className='flex items-center justify-between'>

      <div className="flex items-center gap-5">
        <button className='bg-zinc-800 rounded-full p-1 opacity-70 hover:bg-zinc-600 hover:opacity-90 transition-all duration-300'>
          <ChevronLeft />
        </button>
        <button className='bg-zinc-800 rounded-full p-1 opacity-70 hover:bg-zinc-600 hover:opacity-90 transition-all duration-300'>
          <ChevronRight />
        </button>
      </div>

      <div className='flex items-center gap-2 p-1 bg-zinc-800/80 rounded-full'>
        <div className="w-8 h-8 bg-green-700 rounded-full cursor-pointer">
        </div>

        <div>
          <p className='cursor-default text-zinc-300 hover:text-zinc-50 opacity-70 hover:opacity-100 transition-all duration-500'>Ruan Cardoso</p>
        </div>
        <button>
          <ChevronDown />
        </button>
      </div>
    </div>
  )
}