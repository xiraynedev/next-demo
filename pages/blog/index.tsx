import {FC} from 'react';
import {GetServerSideProps} from 'next';
import {getSession} from 'next-auth/react';

interface BlogProps {
  data: string;
}

const Blog: FC<BlogProps> = ({data}) => {
  return (
    <div className='flex flex-col gap-5 m-4'>
      <h1 className='text-3xl text-green-500'>Blog page</h1>
      <h2 className='text-2xl text-green-800'>{data}</h2>
    </div>
  )
}

export default Blog;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
      data: session ? 'List of Star Wars Characters' : 'Sign in to see your personalized characters list',
    },
  };
};