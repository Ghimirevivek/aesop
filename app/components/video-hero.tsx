'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className='relative h-[100vh]'>
      <video
        ref={videoRef}
        className='absolute inset-0 w-full h-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        poster='/aesop-hero-poster.jpg'
      >
        <source src='/banner.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-black/40' />
      <div className='relative h-full flex items-center'>
        <div className='container mx-auto px-4'>
          <div className='max-w-2xl text-white'>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl mb-6'>Aesop</h1>
            <p className='text-lg lg:text-xl mb-8'>
              Formulations for skin, hair, home and body created with meticulous
              attention to detail, and with efficacy and sensory pleasure in
              mind.
            </p>
            <Button className='group text-base' variant='outline'>
              Discover more
              <ChevronRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
