'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    name: 'Aromatique Hand Balm Trio',
    description: 'Three hydrating hand balms, unique in aroma',
    image: '/assets/img7.jpg',
    href: '/products/hand-balm-trio',
  },
  {
    name: 'Ptolemy Aromatique Candle',
    description: 'A sensuous blend of leather, smoke and wood',
    image: '/assets/img8.jpg',
    href: '/products/ptolemy-candle',
  },
  {
    name: 'Reverence Duet',
    description: 'A sumptuous pairing for hands',
    image: '/assets/img9.jpg',
    href: '/products/reverence-duet',
  },
  {
    name: 'Resurrection Aromatique Hand Wash',
    description: 'Gentle cleansing for hard-working hands',
    image: '/assets/img10.jpg',
    href: '/products/hand-wash',
  },
];

export default function ProductCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      const newIndex =
        direction === 'left' ? currentIndex - 1 : currentIndex + 1;

      if (newIndex >= 0 && newIndex < products.length) {
        setCurrentIndex(newIndex);
        scrollRef.current.scrollTo({
          left: itemWidth * newIndex,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(currentIndex > 0);
      setCanScrollRight(currentIndex < products.length - 1);
    }
  };

  React.useEffect(() => {
    handleScroll();
  }, [currentIndex]);

  const progressWidth = `${((currentIndex + 1) / products.length) * 100}%`;

  return (
    <div
      className='relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className='flex items-center justify-start gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8'
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className='flex-none w-[300px] md:w-[350px] lg:w-[450px] group'
          >
            <div className='aspect-square relative mb-6'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-contain transition-transform duration-500 group-hover:scale-105'
              />
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
              <h3 className='text-lg md:text-xl lg:text-[1.625rem] mb-2 font-light hover:underline'>
                {product.name}
              </h3>
              <p className='text-sm md:text-base lg:text-[1rem] leading-[1.7] text-[#333333]'>
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className='h-[2px] w-full bg-[#333]/10 mt-8'>
        <div
          className='h-full bg-[#333] transition-all duration-300 ease-out'
          style={{ width: progressWidth }}
        />
      </div>

      {canScrollLeft && (
        <Button
          variant='ghost'
          size='icon'
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 -translate-y-1/2 hover:bg-[#333] hover:text-white bg-[#333] text-white rounded-none shadow-lg transition-all duration-300 overflow-hidden'
          style={{
            width: isHovered ? '80px' : '0px',
            height: isHovered ? '70px' : '70px',
            opacity: isHovered ? 1 : 0,
          }}
        >
          <ChevronLeft className='h-6 w-6' />
        </Button>
      )}

      {canScrollRight && (
        <Button
          variant='ghost'
          size='icon'
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 hover:bg-[#333] hover:text-white -translate-y-1/2 bg-[#333] text-white rounded-none shadow-lg transition-all duration-300 overflow-hidden'
          style={{
            width: isHovered ? '80px' : '0px',
            height: isHovered ? '70px' : '70px',
            opacity: isHovered ? 1 : 0,
          }}
        >
          <ChevronRight className='h-6 w-6' />
        </Button>
      )}
    </div>
  );
}
