export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Photos from '@/components/photos'
import VideoThumb from '@/public/images/1.jpg'
import Logo from '@/public/images/Logo.png'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Photos/>
      <div className='flex flex-col relative mt-20'>
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
            <h2 className="h2 mb-4">About us</h2>
            <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>
          <div className='flex xl:m-2 xl:flex-row flex-col relative'>
            <div className='flex justify-center my-auto xl:translate-x-6 z-10 m-4 translate-y-8'>
              <ModalVideo
                  thumb={VideoThumb}
                  thumbWidth={1600}
                  thumbHeight={1400}
                  thumbAlt="Modal video thumbnail"
                  video="/videos/video.mp4"
                  videoWidth={1600}
                  videoHeight={1080} />
            </div>
            <div className='w-full xl:m-2 bg-yellow-900 xl:-translate-x-6 h-full xl:rounded-3xl'>
              <div className="text-center md:p-8 md:pb-4 md:pt-8">
                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter text-yellow-700 tracking-tighter mb-4" data-aos="zoom-y-out">Novi <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-50">table</span></h1>
                  <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-200 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices</p>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                      <Image src={Logo} alt='Logo'></Image>
                    </div>
                  </div>
              </div>
            </div>      
          </div>        

      </div>  
      <FeaturesBlocks />
   
      <Testimonials />
      <Newsletter />
    </>
  )
}
