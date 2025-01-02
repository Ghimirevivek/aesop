import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ContentSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function ContentSection({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  reverse = false,
}: ContentSectionProps) {
  return (
    <section className='py-16 lg:py-24 bg-[#F6F5E8]'>
      <div className='container mx-auto px-4'>
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className='relative aspect-[4/3]'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className='object-cover'
            />
          </div>
          <div className='max-w-xl'>
            <h2 className='text-2xl lg:text-3xl mb-4'>{title}</h2>
            <p className='text-lg mb-8'>{description}</p>
            <Button className='group' variant='outline'>
              {buttonText}
              <ChevronRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
