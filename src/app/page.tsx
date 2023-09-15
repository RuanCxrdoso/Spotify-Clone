import { Home as HomeIcon, Search, Library, PlusSquare, Heart } from 'lucide-react'

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
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Hot Hits Brazil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Bests International</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Pop music</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Harlem Rappers</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>UTOPIA</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>ASTROWORLD</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>WE LOVE YOU TECCA</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Time Machine</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Meet the WOO</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>17</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>ISSA Album</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>SAVAGE MODE II</a>
          </nav>

        </aside>

        <main className="flex-1 p-6">
          Main
        </main>

      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>

    </div>
  )
}
