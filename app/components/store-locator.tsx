'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const storeImages = [
  {
    src: '/assets/storq1.jpg',
    alt: 'Aesop store front at night with warm lighting',
  },
  {
    src: '/assets/store2.jpg',
    alt: 'Aesop store interior with wooden shelving',
  },
  {
    src: '/assets/img3.jpg',
    alt: 'Aesop store minimal design aesthetic',
  },
];

export default function StoreLocator() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % storeImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + storeImages.length) % storeImages.length
    );
  };

  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] bg-[#FFFEF2]'>
      {/* Content */}
      <div className='flex flex-col justify-center p-8 lg:p-16 xl:p-24'>
        <h2 className='text-[2rem] lg:text-[2.25rem] leading-[1.25] mb-6 font-light'>
          Store locator
        </h2>
        <p className='text-lg mb-8 leading-[1.7] text-[#333333]'>
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </p>
        <Button
          variant='outline'
          className='group w-full lg:w-fit border-[#333] text-[#333] hover:bg-[#333] hover:text-white rounded-none px-8 py-6 h-auto'
        >
          Find a nearby store
          <ChevronRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
        </Button>
      </div>

      {/* Image Carousel */}
      <div className='w-full h-full flex flex-col justify-center'>
        {' '}
        <div
          className='relative aspect-[5/3] '
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='relative w-full h-full aspect-[5/3]'>
            {storeImages.map((image, index) => (
              <div
                key={index}
                className=' absolute inset-0 transition-opacity duration-700'
                style={{ opacity: currentIndex === index ? 1 : 0 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className=' object-cover'
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant='ghost'
            size='icon'
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 hover:bg-[#333] hover:text-white bg-[#333] text-white rounded-none shadow-lg transition-all duration-300 overflow-hidden'
            style={{
              width: isHovered ? '80px' : '0px',
              height: isHovered ? '70px' : '70px',
              opacity: isHovered ? 1 : 0,
            }}
          >
            <ChevronLeft className='h-6 w-6' />
          </Button>

          <Button
            variant='ghost'
            size='icon'
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 hover:bg-[#333] hover:text-white bg-[#333] text-white rounded-none shadow-lg transition-all duration-300 overflow-hidden'
            style={{
              width: isHovered ? '80px' : '0px',
              height: isHovered ? '70px' : '70px',
              opacity: isHovered ? 1 : 0,
            }}
          >
            <ChevronRight className='h-6 w-6' />
          </Button>

          {/* Progress Bar */}
          <div className='absolute -bottom-10 left-0 right-0 h-[2px] bg-white/50'>
            <div
              className='absolute h-full bg-gray-600 w-[33.333%] transition-transform duration-300 ease-out'
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
