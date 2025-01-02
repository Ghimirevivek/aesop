import { Button } from '@/components/ui/button';
import { ChevronRight, Menu, Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCarousel from './components/product-carousel';
import VideoHero from './components/video-hero';
import ContentSection from './components/content-section';
import Footer from './components/footer';
import MobileNav from './components/mobile-nav';
import HeroCarousel from './components/hero-carousel';

export default function Home() {
  return (
    <div className='min-h-screen bg-[#FFFEF2]'>
      {/* Top Banner */}
      <div className='bg-[#252525] text-white py-2 px-4 text-sm text-center'>
        <p>
          Trained Aesop consultants are available to provide bespoke skin care
          advice{' '}
          <Link href='#' className='underline'>
            Book a video consultation
          </Link>
        </p>
      </div>

      {/* Secondary Banner */}
      <div className='hidden sm:block bg-[#C2C2AF] text-black py-2 px-4 text-sm text-center'>
        <p>
          Click and Collect is now available at Hong Kong stores.{' '}
          <Link href='#' className='underline'>
            Learn more
          </Link>
        </p>
      </div>

      {/* Navigation */}
      <nav className='hidden sm:block border-b border-[#d6cfcf] py-4'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4 lg:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
              </Button>
              <Button variant='ghost' size='icon'>
                <Search className='h-6 w-6' />
              </Button>
            </div>
            <div className='hidden lg:flex lg:gap-8 lg:font-medium'>
              <Link href='#' className='text-sm hover:underline'>
                Skin Care
              </Link>
              <Link href='#' className='text-sm hover:underline'>
                Body & Hand
              </Link>
              <Link href='#' className='text-sm hover:underline'>
                Hair
              </Link>
              <Link href='#' className='text-sm hover:underline'>
                Fragrance
              </Link>
              <Link href='#' className='text-sm hover:underline'>
                Home
              </Link>
              <Link href='#' className='text-sm hover:underline'>
                Kits & Travel
              </Link>
              <Link href='#' className='text-sm hover:underline'>
                Gifts
              </Link>
              <Link href='#' className='text-sm hover:underline'>
                Read
              </Link>
              <Link href='#' className='text-sm hover:underline'>
                Stores
              </Link>
              <Button variant='ghost' size='icon'>
                <Search className='h-5 w-5 lg:h-10 lg:w-10 relative -top-1' />
              </Button>
            </div>

            <div className='flex items-center gap-4'>
              <div className='hidden lg:flex lg:gap-8 lg:font-medium'>
                <Link href='#' className='text-sm hover:underline'>
                  Login
                </Link>
                <Link href='#' className='text-sm hover:underline'>
                  Cabinet
                </Link>
              </div>
              <Button variant='ghost' size='icon'>
                <ShoppingBag className='h-6 w-6' />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* <VideoHero /> */}
      <HeroCarousel />
      {/* Product Carousel Section */}
      <section className='py-16 lg:py-24'>
        <div className='container mx-auto px-4'>
          <div className='max-w-2xl'>
            <h2 className='text-2xl lg:text-3xl mb-4'>For the body</h2>
            <p className='text-lg mb-8'>
              An expression of care for your body, formulated to cleanse,
              replenish, and nourish in a variety of formats.
            </p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* Content Sections */}
      <ContentSection
        title='Store Locator'
        description='Our consultants are available to host you in-store and provide tailored guidance on gift purchases.'
        buttonText='Find a nearby store'
        imageSrc='/aesop-store.jpg'
        imageAlt='Aesop store interior'
        reverse
      />

      <ContentSection
        title='Facial Appointments'
        description='Book a complimentary consultation to discover the most suitable products for your skin.'
        buttonText='Learn more'
        imageSrc='/aesop-facial.jpg'
        imageAlt='Aesop facial treatment'
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
