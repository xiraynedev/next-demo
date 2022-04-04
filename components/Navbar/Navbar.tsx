import Link from 'next/link';
import {FC, useState} from 'react';
import {useRouter} from 'next/router';
import {signIn, signOut, useSession} from 'next-auth/react';

export const Navbar: FC = () => {
  const router = useRouter();
  const {data: session} = useSession();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  }

  return (
    <nav className="p-6 shadow-lg flex items-center justify-between mb-4">
      <div>
        <Link href="/" passHref>
          <h2 className="cursor-pointer text-3xl font-bold text-blue-500">next-demo</h2>
        </Link>
      </div>
      <div className="flex text-blue-400 font-bold">
        <button
          onClick={handleShowMenu}
          className="text-2xl md:hidden">Menu
        </button>
        <div className={`${showMenu && 'translate-x-0'} transition duration-300 translate-x-full md:translate-x-0 absolute border md:static flex flex-col md:flex-row md:border-0
        top-0 right-0 p-8 w-7/12 md:w-full h-screen md:h-fit gap-5 bg-white`}>
          <button
          onClick={handleCloseMenu}
            className='absolute right-8 top-2 text-2xl md:hidden'>X</button>
          <Link href="/">
            <a className="hover:text-blue-300">HOME</a>
          </Link>
          {
            session &&
						<Link href="/dashboard">
							<a className="hover:text-blue-300">DASHBOARD</a>
						</Link>
          }
          <Link href="/blog">
            <a className="hover:text-blue-300">BLOG</a>
          </Link>
          <Link href={!session ? '/api/auth/signin' : '/api/auth/signout'}>
            <a
              className="hover:text-blue-300"
              onClick={event => {
                event.preventDefault();
                if (!session) {
                  signIn('github');
                } else {
                  router.push('/');
                  signOut();
                }
              }}
            >{!session ? 'SIGN IN' : 'SIGN OUT'}</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};