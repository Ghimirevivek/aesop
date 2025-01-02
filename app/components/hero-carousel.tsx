'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './mobile-nav';

const slides = [
  {
    label: 'Store and Services',
    title: 'Facial Appointments',
    description:
      'Tailored to you, our facial treatments are designed to maintain skin health and target specific concerns. Each appointment includes a consultation to determine your needs and preferences.',
    buttonText: 'Learn more about facials',
    video: '/assets/banner.mp4',
    type: 'video',
  },

  {
    label: 'Latest Release',
    title: 'Ouranon Eau de Parfum',
    description:
      'A fragrance that evokes a silent monolith, the sharp freshness of the forest awakening, and the ancient compass of the stars.',
    buttonText: 'Discover Ouranon',
    image: '/assets/img2.jpg',
    type: 'image',
  },
  {
    label: 'Online only',
    title: 'Four bundles for hair, hands and home',
    description:
      'The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.',
    buttonText: 'Explore bundles',
    image: '/assets/img1.jpg',
    type: 'image',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const nextSlide = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 10);
    }, 300);
  }, [isAnimating]);

  const previousSlide = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 10);
    }, 300);
  }, [isAnimating]);

  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <section className='relative h-[50vh] lg:h-[80vh] bg-[#FFFEF2]'>
      <div className='grid h-full lg:grid-cols-2'>
        {/* Content */}
        <MobileNav />
        <div className='hidden lg:flex items-center justify-between px-4 lg:px-16 relative ml-0 '>
          <Link
            href='/'
            className={` relative -left-[1rem] top-[3rem] h-full transition-opacity duration-300 ease-in-out ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <svg
              aria-labelledby='aesop-:rd:'
              className='Icon_base__GKZ58 Icon_light__1TZsq Logo_icon__NDEf8 w-[100px] block xl:w-[120px] xl:h-[40px]'
              data-testid='data-testid-Icon'
              focusable='false'
              height='40'
              role='img'
              tabIndex='-1'
              viewBox='0 0 489.7 154.3'
              width='120'
            >
              <title aria-label='Aesop' id='aesop-:rd:'>
                Aesop
              </title>
              <g>
                <path d='M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z'></path>
                <path d='M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z'></path>
                <path d='M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z'></path>
                <path d='M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73'></path>
                <path d='M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7'></path>
                <rect x='131.8' y='13.5' width='44.3' height='5'></rect>
                <path d='M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.8-4.6,10.5-10.5,10.5c-5.8,0-10.5-4.7-10.5-10.5 C468.7,97.6,473.3,92.9,479.2,92.9'></path>
              </g>
            </svg>
            {/* <h2 className='font-normal text-2xl lg:text-4xl tracking-tight'>
              Aēsop
            </h2> */}
          </Link>
          <div
            className={`relative -top-[3rem] -left-[0rem] xl:-left-[2rem] max-w-sm transition-opacity duration-300 ease-in-out ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className='text-sm mb-3 block'>
              {slides[currentSlide].label}
            </span>
            <h1 className='text-[1.75rem] 2xl:text-[2.25rem] leading-tight mb-6'>
              {slides[currentSlide].title}
            </h1>
            <p className='text-md 2xl:text-lg mb-6 leading-relaxed'>
              {slides[currentSlide].description}
            </p>
            <Button
              variant='outline'
              className='group border-[#333] text-[#333] hover:bg-[#333] hover:text-white rounded-none px-8 py-6 h-auto'
            >
              {slides[currentSlide].buttonText}
              <ChevronRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Button>
          </div>
        </div>

        {/* Media */}
        <div
          className={`relative overflow-hidden h-full transition-opacity duration-300 ease-in-out ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Link
            href='/'
            className={`hidden sm:block lg:hidden z-40 absolute top-[3rem] left-[3rem]  h-full transition-opacity duration-300 ease-in-out `}
          >
            <svg
              aria-labelledby='aesop-:rd:'
              className=' w-[100px]  xl:w-[120px] xl:h-[40px]'
              data-testid='data-testid-Icon'
              focusable='false'
              height='40'
              role='img'
              tabIndex='-1'
              viewBox='0 0 489.7 154.3'
              width='120'
            >
              <title aria-label='Aesop' id='aesop-:rd:'>
                Aesop
              </title>
              <g>
                <path d='M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z'></path>
                <path d='M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z'></path>
                <path d='M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z'></path>
                <path d='M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73'></path>
                <path d='M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7'></path>
                <rect x='131.8' y='13.5' width='44.3' height='5'></rect>
                <path d='M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.8-4.6,10.5-10.5,10.5c-5.8,0-10.5-4.7-10.5-10.5 C468.7,97.6,473.3,92.9,479.2,92.9'></path>
              </g>
            </svg>
            {/* <h2 className='font-normal text-2xl lg:text-4xl tracking-tight'>
              Aēsop
            </h2> */}
          </Link>
          <div className='w-full h-full relative overflow-hidden'>
            {slides[currentSlide].type === 'video' ? (
              <video
                key={currentSlide}
                className='h-full w-full object-cover'
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={slides[currentSlide].video} type='video/mp4' />
              </video>
            ) : (
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className='absolute object-cover'
                priority
              />
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className='absolute -bottom-10 left-0 right-0 flex items-center justify-center px-4 lg:px-16 z-40'>
        <div className='flex items-center gap-4'>
          <Button
            variant='ghost'
            size='icon'
            onClick={previousSlide}
            className='hover:bg-white/10'
            disabled={isAnimating}
          >
            <ChevronLeft className='h-6 w-6' />
          </Button>
          <span className='text-sm'>
            {currentSlide + 1}/{slides.length}
          </span>
          <Button
            variant='ghost'
            size='icon'
            onClick={nextSlide}
            className='hover:bg-white/10'
            disabled={isAnimating}
          >
            <ChevronRight className='h-6 w-6' />
          </Button>
        </div>

        <Button
          variant='ghost'
          size='icon'
          onClick={() => setIsPlaying(!isPlaying)}
          className='hover:bg-white/10'
        >
          {isPlaying ? (
            <Pause className='h-6 w-6' />
          ) : (
            <Play className='h-6 w-6' />
          )}
        </Button>
      </div>
    </section>
  );
}
