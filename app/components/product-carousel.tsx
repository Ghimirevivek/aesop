'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const products = [
  {
    name: 'Resurrection Aromatique Hand Wash',
    description: 'Gentle cleansing for hard-working hands',
    image: '/product-1.png',
  },
  {
    name: 'Resurrection Aromatique Hand Balm',
    description: 'Richly hydrating care for hands and cuticles',
    image: '/product-2.png',
  },
  {
    name: 'Geranium Leaf Body Cleanser',
    description: 'A gentle, invigorating gel cleanser',
    image: '/product-3.png',
  },
  {
    name: 'Geranium Leaf Body Balm',
    description: 'Refreshingly aromatic, medium-weight hydration',
    image: '/product-4.png',
  },
];

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft <
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  return (
    <div className='relative'>
      <div
        className='flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth'
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {products.map((product, index) => (
          <div key={index} className='flex-none w-[300px]'>
            <div className='aspect-square relative mb-4'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-cover'
              />
            </div>
            <h3 className='text-lg font-medium mb-2'>{product.name}</h3>
            <p className='text-sm text-gray-600'>{product.description}</p>
          </div>
        ))}
      </div>

      {canScrollLeft && (
        <Button
          variant='ghost'
          size='icon'
          className='absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white'
          onClick={() => scroll('left')}
        >
          <ChevronLeft className='h-6 w-6' />
        </Button>
      )}

      {canScrollRight && (
        <Button
          variant='ghost'
          size='icon'
          className='absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white'
          onClick={() => scroll('right')}
        >
          <ChevronRight className='h-6 w-6' />
        </Button>
      )}
    </div>
  );
}
