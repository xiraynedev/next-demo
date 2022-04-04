import Link from 'next/link';
import {FC} from 'react';

export const Navbar: FC = () => {
  return (
    <nav className='p-6 shadow-lg flex items-center justify-between'>
      <div>
        <Link href='/' passHref>
          <h2 className='cursor-pointer text-3xl font-bold text-blue-500'>next-demo</h2>
        </Link>
      </div>
      <div className='flex gap-5 text-blue-400 font-bold'>
        <Link href='/'>
          <a className='hover:text-blue-300'>HOME</a>
        </Link>
        <Link href='/dashboard'>
          <a className='hover:text-blue-300'>DASHBOARD</a>
        </Link>
        <Link href='/blog'>
          <a className='hover:text-blue-300'>BLOG</a>
        </Link>
        <Link href='/signin'>
          <a className='hover:text-blue-300'>SIGN IN</a>
        </Link>
        <Link href='/signout'>
          <a className='hover:text-blue-300'>SIGN OUT</a>
        </Link>
      </div>
    </nav>
  )
}