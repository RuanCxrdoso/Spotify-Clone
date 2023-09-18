import { Play } from "lucide-react";
import Image from 'next/image'

export default function TopContent() {
  return(
    <>
      <h1 className='text-3xl font-semibold mt-10'>Good Afternoon</h1><div className='grid grid-cols-3 gap-5 mt-8'>

        <a href='' className='flex items-center justify-between group bg-zinc-600/80 hover:bg-zinc-500/90 transition-colors duration-500 rounded overflow-hidden'>
          <div className='flex items-center'>
            <div className='overflow-hidden'>
              <Image src="/astroworld.jpg" width={100} height={100} alt="ASTROWORLD Album Cover" className='group-hover:scale-110 transition-all duration-500' />
            </div>
            <h1 className='ml-4 font-semibold'>ASTROWORLD</h1>
          </div>
          <div className='mr-5 translate-x-20 group-hover:translate-x-0 transition-transform duration-500'>
            <button className='bg-green-600 rounded-full p-3 opacity-0 group-hover:opacity-90 transition-opacity duration-500 '>
              <Play />
            </button>
          </div>
        </a>

        <a href='' className='flex items-center justify-between group bg-zinc-600/80 hover:bg-zinc-500/90 transition-colors duration-500 rounded overflow-hidden'>
          <div className="flex items-center">
            <div className='overflow-hidden'>
              <Image src="/issa.png" width={100} height={100} alt='ISSA Album Cover' className='group-hover:scale-110 transition-all duration-500' />
            </div>
            <h1 className='ml-4 font-semibold'>ISSA Album</h1>
          </div>
          <div className='mr-5 translate-x-20 group-hover:translate-x-0 transition-transform duration-500'>
            <button className='bg-green-600 rounded-full p-3 opacity-0 group-hover:opacity-90 transition-opacity duration-500 '>
              <Play />
            </button>
          </div>
        </a>

        <a href='' className='flex items-center justify-between group bg-zinc-600/80 hover:bg-zinc-500/90 transition-colors duration-500 rounded overflow-hidden'>
          <div className='flex items-center'>
            <div className='overflow-hidden'>
              <Image src="/maquinadotempo.webp" width={100} height={100} alt='Máquina do Tempo Album Cover' className='group-hover:scale-110 transition-all duration-500' />
            </div>
            <h1 className='ml-4 font-semibold'>Máquina do Tempo</h1>
          </div>
          <div className='mr-5 translate-x-20 group-hover:translate-x-0 transition-transform duration-500'>
            <button className='bg-green-600 rounded-full p-3 opacity-0 group-hover:opacity-90 transition-opacity duration-500 '>
              <Play />
            </button>
          </div>
        </a>

        <a href='' className='flex items-center justify-between group bg-zinc-600/80 hover:bg-zinc-500/90 transition-colors duration-500 rounded overflow-hidden'>
          <div className='flex items-center'>
            <div className='overflow-hidden'>
              <Image src="/savagemode.jpg" width={100} height={100} alt='Savage Mode II Album Cover' className='group-hover:scale-110 transition-all duration-500' />
            </div>
            <h1 className='ml-4 font-semibold'>SAVAGE MODE II</h1>
          </div>
          <div className='mr-5 translate-x-20 group-hover:translate-x-0 transition-transform duration-500'>
            <button className='bg-green-600 rounded-full p-3 opacity-0 group-hover:opacity-90 transition-opacity duration-500 '>
              <Play />
            </button>
          </div>
        </a>

        <a href='' className='flex items-center justify-between group bg-zinc-600/80 hover:bg-zinc-500/90 transition-colors duration-500 rounded overflow-hidden'>
          <div className='flex items-center'>
            <div className='overflow-hidden'>
              <Image src="/We_Love_You_Tecca.jpeg" height={100} width={100} alt='We Love You Tecca Album Cover' className='group-hover:scale-110 transition-all duration-500' />
            </div>
            <h1 className='ml-4 font-semibold'>We Love You Tecca</h1>
          </div>
          <div className='mr-5 translate-x-20 group-hover:translate-x-0 transition-transform duration-500'>
            <button className='bg-green-600 rounded-full p-3 opacity-0 group-hover:opacity-90 transition-opacity duration-500 '>
              <Play />
            </button>
          </div>
        </a>

        <a href='' className='flex items-center justify-between group bg-zinc-600/80 hover:bg-zinc-500/90 transition-colors duration-500 rounded overflow-hidden'>
          <div className='flex items-center'>
            <div className='overflow-hidden'>
              <Image src="/utopia.png" width={100} height={100} alt='UTOPIA Album Cover' className='group-hover:scale-110 transition-all duration-500' />
            </div>
            <h1 className='ml-4 font-semibold'>UTOPIA</h1>
          </div>
          <div className='mr-5 translate-x-20 group-hover:translate-x-0 transition-transform duration-500'>
            <button className=' bg-green-600 rounded-full p-3 opacity-0 group-hover:opacity-90 transition-opacity duration-500 '>
              <Play />
            </button>
          </div>
        </a>

      </div>
    </>
  )
}