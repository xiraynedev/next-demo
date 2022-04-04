import Link from 'next/link';
import {FC} from 'react';
import {signIn, signOut, useSession } from 'next-auth/react';

export const Navbar: FC = () => {
  const {data: session, status} = useSession();
  console.log(session, status);

  return (
    <nav className='p-6 shadow-lg flex items-center justify-between mb-4'>
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
        {
          !session && status === 'unauthenticated' &&
          <Link href='/api/auth/signin'>
            <a
              onClick={event => {
                event.preventDefault();
                signIn('github');
              }}
              className='hover:text-blue-300'>SIGN IN</a>
          </Link>
        }
        {
          session &&
          <Link href='/api/auth/signout'>
            <a
              onClick={event => {
                event.preventDefault();
                signOut();
              }}
              className='hover:text-blue-300'>SIGN OUT</a>
          </Link>
        }
      </div>
    </nav>
  );
};