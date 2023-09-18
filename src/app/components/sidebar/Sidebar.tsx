import { HomeIcon, Search, Library, PlusSquare, Heart } from "lucide-react";

export default function Sidebar() {
  return (
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

      <nav className='flex flex-col gap-3 mt-6 pt-6 border-t border-zinc-800 overflow-hidden'>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>UTOPIA</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>ASTROWORLD</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>We Love You Tecca</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Máquina do Tempo</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Meet the Woo</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>17</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>ISSA Album</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>SAVAGE MODE II</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Pink Tape</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>For all the Dogs</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Rodeo</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>21 Gang</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>I AM YOU</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Narcisit</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Top Shotta</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Donda</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>a Gift & a Curse</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>BUSINESS IS BUSINESS</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Narcisit</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>333</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Whole Lotta Red</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Birds in the Trap Sing McKnight</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>JACKBOYS</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Legends Never Die</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Nothing Changed</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>previas.zip</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>ÉTPM?!</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Essa é a Vida de um Corredor</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Contradições</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Zoo</a>
        <a href="" data-aos='fade-up' data-aos-duration='1000' className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-500'>Trap the Fato</a>
      </nav>

    </aside>
  )
}