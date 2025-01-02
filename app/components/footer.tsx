import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#252525] text-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Email Signup */}
          <div className='space-y-4'>
            <h3 className='text-sm font-medium'>
              Subscribe to Aesop communications
            </h3>
            <Input
              type='email'
              placeholder='Email address'
              className='bg-transparent border-white/30'
            />
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='consent'
                className='rounded border-white/30'
              />
              <label htmlFor='consent' className='text-sm'>
                Subscribe to receive communications from Aesop. By subscribing,
                you confirm you have read and understood our privacy policy.
              </label>
            </div>
          </div>

          {/* Contact */}
          <div className='space-y-4'>
            <h3 className='text-sm font-medium'>Contact us</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Contact us
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Shipping
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Returns
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Order history
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className='space-y-4'>
            <h3 className='text-sm font-medium'>About</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Our story
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Foundation
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className='space-y-4'>
            <h3 className='text-sm font-medium'>Social</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Instagram
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Twitter
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  WeChat
                </Link>
              </li>
              <li>
                <Link href='#' className='text-sm hover:underline'>
                  Weibo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-16 pt-8 border-t border-white/30'>
          <p className='text-sm text-white/70'>
            © {new Date().getFullYear()} Aesop Hong Kong
          </p>
        </div>
      </div>
    </footer>
  );
}
