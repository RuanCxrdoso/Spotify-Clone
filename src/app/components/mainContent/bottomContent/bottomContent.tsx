'use client' // somente no componente que usar o useEffect

import { Play } from "lucide-react";
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function BottomContent() {

  useEffect(() => {
    AOS.init({});
  }, [])

  return(
    <>
      <div className="flex justify-between items-center">
        <h1 className='text-3xl font-semibold mt-8 mb-8'>Made For Ruan Cardoso</h1>
        <a href="" className='text-zinc-400 opacity-80 text-lg font-semibold hover:text-zinc-50 hover:opacity-100 hover:text-xl transition-all duration-300'>Show all</a>
      </div>

      <div className='h-auto grid grid-cols-5 gap-16 px-2 mb-8 overflow-hidden'>

        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/GiftCourse.png" width={290} height={290} alt='Gift and Course Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>a Gift & a Curse</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Gunna</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/meetthewoo.jpeg" width={290} height={290} alt='Meet the WOO Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500' />
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Meet the Woo</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Pop Smoke</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/meetthewoo2.jpg" width={290} height={290} alt='Gift and Course Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Meet the Woo 2</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Pop Smoke</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/tourlife3.jpeg" width={290} height={290} alt='Gift and Course Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Luv is Rage 2</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Lil Uzi Vert</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/mellyvsmelvin.png" width={290} height={290} alt='Gift and Course Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Melly vs Melvin</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>YNW Melly</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/4evarrarri.jpg" width={290} height={290} alt='4EVARRARRi Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>4EVARRARRi</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Justin Rarri</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/alleyesonme.jpg" width={290} height={290} alt='All Eyez On Me Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>All Eyez On Me</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>2Pac</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/legends.jpg" width={290} height={290} alt='Legends Never Die Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Legends Never Die</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Juice WRLD</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/lifesatrip.jpg" width={290} height={290} alt='Life&apos;s a Trip Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Life&apos;s a Trip</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Trippie Redd</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/nothingchanged.jpg" width={290} height={290} alt='Nothing Changed Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Nothing Changed</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Quavo, Takeoff</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/pinktape.jpeg" width={290} height={290} alt='Pink Tape Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Pink Tape</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Lil Uzi Vert</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/topshotta.png" width={290} height={290} alt='Top Shotta Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Top Shotta</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>NLE Choppa</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/shoot.png" width={290} height={290} alt='Shoot For The Stars Aim For The Moon Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Shoot For The Stars Aim For The Moon</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Pop Smoke</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/WLR.png" width={290} height={290} alt='Whole Lotta Red Album Cover' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Whole Lotta Red</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>Playboi Carti</p>
        </a>
        <a data-aos='fade-up' data-aos-duration='1000' className='bg-zinc-800 p-3 rounded group hover:bg-zinc-700 transition-colors duration-300 cursor-pointer overflow-hidden'>
          <div className='relative overflow-hidden'>
            <Image src="/look.jpg" width={290} height={290} alt='Look at Me' className='rounded group-hover:brightness-50 transition-all duration-500'/>
            <div className='bg-green-600 rounded-full p-3 opacity-100 group-hover:opacity-100 translate-y-52 group-hover:translate-y-0 transition-all duration-500 absolute bottom-1/3 right-1/3 2xl:bottom-4 2xl:right-4'>
              <Play />
            </div>
          </div>
          <h1 data-aos='fade-up' data-aos-duration='1300' className='mt-5 mb-1 font-semibold'>Look at Me!</h1>
          <p data-aos='fade-up' data-aos-duration='1600' className='text-zinc-400 opacity-90'>XXXTENTACION</p>
        </a>

      </div>
    </>
  )
}