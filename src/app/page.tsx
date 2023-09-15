import { Home as HomeIcon, Search, Library, PlusSquare, Heart, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex flex-1">

        <aside className="w-72 bg-zinc-950 p-6">

          <div className='flex items-center gap-2 mb-8'>
            <div className='w-3 h-3 bg-red-600 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className='flex flex-col gap-5'>
            <a href="" className='flex items-center gap-3 text-sm text-zinc-400  hover:text-zinc-50 transition-colors duration-500'> 
              <HomeIcon />
              Home
            </a>

            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-500'>
              <Search />
              Search
            </a>

            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-500'>
              <Library />
              Your Library
            </a>

            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-500 mt-7'>
              <PlusSquare />
              Create Playlist
            </a>

            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-500'>
              <Heart />
              Liked Songs
            </a>
          </nav>

          <nav className='flex flex-col gap-3 mt-6 pt-6 border-t border-zinc-800 overflow-auto'>
            {/* <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Hot Hits Brazil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Bests International</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Pop music</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Harlem Rappers</a> */}
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>UTOPIA</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>ASTROWORLD</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>WE LOVE YOU TECCA</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Time Machine</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Meet the Woo</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>17</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>ISSA Album</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>SAVAGE MODE II</a>
          </nav>

        </aside>

        <main className="flex-1 p-6">
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

          <h1 className='text-3xl font-semibold mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-5 mt-5'>
            <div className='flex items-center bg-white/20 rounded overflow-hidden'>
              <Image src="/astroworld.jpg" width={100} height={100} alt="ASTROWORLD Album Cover" />
              <h1 className='ml-4 font-semibold'>ASTROWORLD</h1>
            </div>
            <div className='flex items-center bg-white/20 rounded overflow-hidden'>
              <Image src="/issa.png" width={100} height={100} alt='ISSA Album Cover' />
              <h1 className='ml-4 font-semibold'>ISSA Album</h1>
            </div>
            <div className='flex items-center bg-white/20 rounded overflow-hidden'>
              <Image src="/maquinadotempo.webp" width={100} height={100} alt='Máquina do Tempo Album Cover' />
              <h1 className='ml-4 font-semibold'>Máquina do Tempo</h1>
            </div>
            <div className='flex items-center bg-white/20 rounded overflow-hidden'>
              <Image src="/savagemode.jpg" width={100} height={100} alt='Savage Mode II Album Cover' />
              <h1 className='ml-4 font-semibold'>SAVAGE MODE II</h1>
            </div>
            <div className='flex items-center bg-white/20 rounded overflow-hidden'>
              <Image src="/We_Love_You_Tecca.jpeg" height={100} width={100} alt='We Love You Tecca Album Cover' />
              <h1 className='ml-4 font-semibold'>We Love You Tecca</h1>
            </div>
            <div className='flex items-center bg-white/20 rounded overflow-hidden'>
              <Image src="/utopia.png" width={100} height={100} alt='UTOPIA Album Cover' />
              <h1 className='ml-4 font-semibold'>UTOPIA</h1>
            </div>
          </div>

          <h1 className='text-3xl font-semibold mt-5 mb-5'>Made For Ruan Cardoso</h1>

          <div className='flex items-center justify-center gap-20 px-2'>

            <div>
              <Image src="/GiftCourse.png" width={290} height={290} alt='Gift and Course Album Cover' className='rounded'/>
              <h1 className='mt-3 mb-1 font-semibold'>Gift and Course</h1>
              <p className='text-zinc-400 opacity-90'>Gunna</p>
            </div>
            <div>
              <Image src="/meetthewoo.jpeg" width={290} height={290} alt='Meet the WOO Album Cover' className='rounded'/>
              <h1 className='mt-3 mb-1 font-semibold'>Meet the Woo</h1>
              <p className='text-zinc-400 opacity-90'>Pop Smoke</p>
            </div>
            <div>
              <Image src="/meetthewoo2.jpg" width={290} height={290} alt='Gift and Course Album Cover' className='rounded'/>
              <h1 className='mt-3 mb-1 font-semibold'>Meet the Woo 2</h1>
              <p className='text-zinc-400 opacity-90'>Pop Smoke</p>
            </div>
            <div>
              <Image src="/tourlife3.jpeg" width={290} height={290} alt='Gift and Course Album Cover' className='rounded'/>
              <h1 className='mt-3 mb-1 font-semibold'>XO Tour Llife3</h1>
              <p className='text-zinc-400 opacity-90'>Lil Uzi Vert</p>
            </div>
            <div>
              <Image src="/mellyvsmelvin.png" width={290} height={290} alt='Gift and Course Album Cover' className='rounded'/>
              <h1 className='mt-3 mb-1 font-semibold'>Melly vs Melvin</h1>
              <p className='text-zinc-400 opacity-90'>YNW Melly</p>
            </div>

          </div>

        </main>

      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>

    </div>
  )
}
