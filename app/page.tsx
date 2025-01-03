import { Button } from '@/components/ui/button';
import { ChevronRight, Menu, Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCarousel from './components/product-carousel';
import HeroCarousel from './components/hero-carousel';
import ContentSection from './components/content-section';
import Footer from './components/footer';
import MobileNav from './components/mobile-nav';
import ProductGrid from './components/product-grid';
import StoreLocator from './components/store-locator';

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

      {/* Navigation - Only visible on desktop */}
      <nav className='hidden lg:block border-b border-[#d6cfcf] py-4'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <div className='lg:flex lg:gap-8 lg:font-medium'>
              <Link href='#' className='text-sm hover:underline'>
                Skin Care
              </Link>
              <Link
                href='#'
                className='text-[14px] text-[#333333] hover:underline font-medium'
              >
                Body & Hand
              </Link>
              <Link
                href='#'
                className='text-[14px] text-[#333333] hover:underline font-medium'
              >
                Hair
              </Link>
              <Link
                href='#'
                className='text-[14px] text-[#333333] hover:underline font-medium'
              >
                Fragrance
              </Link>
              <Link
                href='#'
                className='text-[14px] text-[#333333] hover:underline font-medium'
              >
                Home
              </Link>
              <Link
                href='#'
                className='text-[14px] text-[#333333] hover:underline font-medium'
              >
                Kits & Travel
              </Link>
              <Link
                href='#'
                className='text-[14px] text-[#333333] hover:underline font-medium'
              >
                Gifts
              </Link>
              <Link
                href='#'
                className='text-[14px] text-[#333333] hover:underline font-medium'
              >
                Read
              </Link>
              <Link
                href='#'
                className='text-[14px] text-[#333333] hover:underline font-medium'
              >
                Stores
              </Link>
              <Button variant='ghost' size='icon'>
                <Search className='h-5 w-5' />
              </Button>
            </div>
            <div className='flex items-center gap-4'>
              <div className='lg:flex lg:gap-8 lg:font-medium'>
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
      <HeroCarousel />

      <div className='mt-20'>
        <ContentSection
          label='Festive giving'
          title='A complimentary sleeve for your gifts'
          description="Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the 'gift packaging' option at checkout. Exclusions apply."
          buttonText='Explore gifts'
          imageSrc='/assets/img4.jpg'
          imageAlt='Festive gift sleeve with artistic orange and red design'
          // backgroundColor='#D45B44'
        />
      </div>
      <ProductGrid />
      {/* Product Carousel Section */}
      <section className='py-16 lg:py-24'>
        <div className='container mx-auto px-4'>
          <ProductCarousel />
        </div>
      </section>
      {/* Content Sections */}

      <ContentSection
        label='Our online offering '
        title='Gestures to enhance your experience'
        description='Discover a suite of complimentary additions available with every order, including curated product samples, gift wrapping in our signature cotton bag and personalised gift messaging. '
        buttonText='Explore our online offering'
        imageSrc='/assets/img6.jpg'
        imageAlt='online offering'
      />

      <ContentSection
        label='Tokens of appreciation'
        title='Corporate gifts'
        description='Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.'
        buttonText='Learn more about this service'
        imageSrc='/assets/img5.jpg'
        imageAlt='Tokens of appreciation'
      />
      <StoreLocator />

      {/* Footer */}
      <Footer />
    </div>
  );
}
