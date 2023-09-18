'use client' // somente no componente que usar o useEffect

import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat, Mic, ListMusic, Laptop2, Volume1, Maximize2 } from "lucide-react";
import Image from 'next/image'
import { useState } from "react";

export default function Footer() {
  const [ativo, setAtivo] = useState(false)
  const toggleClass = () => {
    setAtivo(!ativo)
  }

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 p-3 fixed bottom-0 w-full">
      <div className='flex items-center justify-between'>

        <div className='flex items-center gap-4'>
          <div className='rounded overflow-hidden'>
            <Image src="/look.jpg" width={60} height={60} alt='Look at Me' />
          </div>
          <div className='flex flex-col gap-1 mr-6'>
            <strong className='text-lg font-semibold'>Look at Me!</strong>
            <p className='text-xs text-zinc-400 opacity-80'>XXXTENTACION</p>
          </div>
          <button onClick={toggleClass} >
            <Heart className={ativo ? 'h-5 cursor-pointer fill-red-600' : 'h-5 cursor-pointer'} />
          </button>
        </div>

        <div>
          <div className='flex items-center justify-center gap-8 mb-1'>
            <Shuffle className='opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer'/>
            <SkipBack className='opacity-60 fill-zinc-50 hover:opacity-100 transition-all duration-500 cursor-pointer'/>
            <button className='flex items-center justify-center bg-zinc-200 h-10 w-10 p-0 rounded-full opacity-70 hover:opacity-100 hover:bg-zinc-50 transition-all duration-500'>
              <Play className='fill-black'/>
            </button>
            <SkipForward className='opacity-60 fill-zinc-50 hover:opacity-100 transition-all duration-500 cursor-pointer'/>
            <Repeat className='opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>1:17</span>
            <div className='h-1 w-96 rounded-full bg-zinc-600'>
              <div className='h-1 w-28 rounded-full bg-zinc-200'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:06</span>
          </div>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <button>
            <Mic className='h-5 w-5 opacity-60 hover:opacity-100 transition-opacity duration-500' />
          </button>
          <button>
            <ListMusic className='h-5 w-5 opacity-60 hover:opacity-100 transition-opacity duration-500' />
          </button>
          <button>
            <Laptop2 className='h-5 w-5 opacity-60 hover:opacity-100 transition-opacity duration-500' />
          </button>
          <button>
            <Volume1  className='h-5 w-5 opacity-60 hover:opacity-100 transition-opacity duration-500' />
          </button>
          <div className='h-1 w-20 rounded-full bg-zinc-600 -ml-3'>
            <div className='h-1 w-8 rounded-full bg-zinc-50'></div>
          </div>
          <button>
            <Maximize2 className='h-5 w-5 opacity-60 hover:opacity-100 transition-opacity duration-500' />
          </button>
        </div>

      </div>
    </footer>
  )
}