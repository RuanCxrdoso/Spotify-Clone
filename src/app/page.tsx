import { Home as HomeIcon, Search, Library, PlusSquare, Heart, ChevronLeft, ChevronRight, ChevronDown, Play } from 'lucide-react'

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
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>We Love You Tecca</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Time Machine</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Meet the Woo</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>17</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>ISSA Album</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>SAVAGE MODE II</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Pink Tape</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>a Gift & a Curse</a>
          </nav>

        </aside>

        <main className="flex-1 p-6 mb-14 overflow-auto">
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

          <div className='grid grid-cols-3 gap-5 mt-8'>

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
            </a >

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

          <div className="flex justify-between items-center">
            <h1 className='text-3xl font-semibold mt-8 mb-8'>Made For Ruan Cardoso</h1>
            <a href="" className='text-zinc-400 opacity-80 text-lg font-semibold hover:text-zinc-50 hover:opacity-100 hover:text-xl transition-all duration-300'>Show all</a>
          </div>

          <div className='h-96 grid grid-cols-5 gap-16 px-2 mb-8 overflow-y-scroll'>

            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/GiftCourse.png" width={290} height={290} alt='Gift and Course Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>a Gift & a Curse</h1>
              <p className='text-zinc-400 opacity-90'>Gunna</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/meetthewoo.jpeg" width={290} height={290} alt='Meet the WOO Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Meet the Woo</h1>
              <p className='text-zinc-400 opacity-90'>Pop Smoke</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/meetthewoo2.jpg" width={290} height={290} alt='Gift and Course Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Meet the Woo 2</h1>
              <p className='text-zinc-400 opacity-90'>Pop Smoke</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/tourlife3.jpeg" width={290} height={290} alt='Gift and Course Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Luv is Rage 2</h1>
              <p className='text-zinc-400 opacity-90'>Lil Uzi Vert</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/mellyvsmelvin.png" width={290} height={290} alt='Gift and Course Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Melly vs Melvin</h1>
              <p className='text-zinc-400 opacity-90'>YNW Melly</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/4evarrarri.jpg" width={290} height={290} alt='4EVARRARRi Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>4EVARRARRi</h1>
              <p className='text-zinc-400 opacity-90'>Justin Rarri</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/alleyesonme.jpg" width={290} height={290} alt='All Eyez On Me Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>All Eyez On Me</h1>
              <p className='text-zinc-400 opacity-90'>2Pac</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/legends.jpg" width={290} height={290} alt='Legends Never Die Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Legends Never Die</h1>
              <p className='text-zinc-400 opacity-90'>Juice WRLD</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/lifesatrip.jpg" width={290} height={290} alt='Life&apos;s a Trip Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Life&apos;s a Trip</h1>
              <p className='text-zinc-400 opacity-90'>Trippie Redd</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/nothingchanged.jpg" width={290} height={290} alt='Nothing Changed Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Nothing Changed</h1>
              <p className='text-zinc-400 opacity-90'>Quavo, Takeoff</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/pinktape.jpeg" width={290} height={290} alt='Pink Tape Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Pink Tape</h1>
              <p className='text-zinc-400 opacity-90'>Lil Uzi Vert</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/topshotta.png" width={290} height={290} alt='Top Shotta Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Top Shotta</h1>
              <p className='text-zinc-400 opacity-90'>NLE Choppa</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/shoot.png" width={290} height={290} alt='Shoot For The Stars Aim For The Moon Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Shoot For The Stars Aim For The Moon</h1>
              <p className='text-zinc-400 opacity-90'>Pop Smoke</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/WLR.png" width={290} height={290} alt='Whole Lotta Red Album Cover' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Whole Lotta Red</h1>
              <p className='text-zinc-400 opacity-90'>Playboi Carti</p>
            </a>
            <a className='bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors duration-300 cursor-pointer'>
              <Image src="/look.jpg" width={290} height={290} alt='Look at Me' className='rounded'/>
              <h1 className='mt-5 mb-1 font-semibold'>Look at Me</h1>
              <p className='text-zinc-400 opacity-90'>XXXTENTACION</p>
            </a>

          </div>

        </main>

      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 fixed bottom-0 w-screen">
        Footer
      </footer>

    </div>
  )
}
