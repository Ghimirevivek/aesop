import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ContentSectionProps {
  label?: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  backgroundColor?: string;
}

export default function ContentSection({
  label,
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  backgroundColor = '#FFFEF2',
}: ContentSectionProps) {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2'>
      {/* Image Section */}
      <div
        className='flex items-center justify-center relative h-full w-full'
        style={{ backgroundColor }}
      >
        <div className='flex items-center justify-center'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1000}
            height={1000}
            className='w-full h-full object-contain'
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className='flex items-center justify-center bg-[#FFFEF2] px-6 py-12 lg:p-20 w-full'>
        <div className='max-w-md'>
          {label && (
            <span className='text-sm mb-6 block text-[#333333]'>{label}</span>
          )}
          <h2 className='text-[1.75rem] lg:text-[2.25rem] leading-[1.25] mb-6 font-light'>
            {title}
          </h2>
          <p className='text-lg mb-8 leading-[1.7] text-[#333333]'>
            {description}
          </p>
          <Button
            variant='outline'
            className='w-full lg:w-auto group border-[#333] text-[#333] hover:bg-[#333] hover:text-white rounded-none px-8 py-6 h-auto'
          >
            {buttonText}
            <ChevronRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Button>
        </div>
      </div>
    </section>
  );
}
