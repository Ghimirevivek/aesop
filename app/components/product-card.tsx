import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  mediaSrc: string; // Can be image or video URL
  mediaAlt: string;
  href: string;
  mediaType: 'image' | 'video'; // To specify media type
}

export default function ProductCard({
  title,
  description,
  mediaSrc,
  mediaAlt,
  href,
  mediaType,
}: ProductCardProps) {
  return (
    <div className='group block'>
      <div className='aspect-[5/3] relative mb-6 overflow-hidden'>
        {mediaType === 'image' ? (
          <Image
            src={mediaSrc}
            alt={mediaAlt}
            fill
            className='object-fill transition-transform duration-500 group-hover:scale-105'
          />
        ) : (
          <div className='relative w-full h-[300px] sm:h-[400px] xl:h-[600px] overflow-hidden'>
            <video
              src={mediaSrc}
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
        )}
      </div>
      <h2 className='text-[1.75rem] leading-[1.25] mb-4 font-light'>{title}</h2>
      <p className='text-[1rem] leading-[1.7] text-[#333333]'>{description}</p>
    </div>
  );
}
