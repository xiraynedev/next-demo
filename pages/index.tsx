import Head from 'next/head';
import { FC } from 'react';
import { useSession } from 'next-auth/react';
import { GetStaticProps } from 'next';

interface HomeProps {
  data: {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: [];
    starships: string[];
    url: string;
    vehicles: string[];
  };
}

const HomePage: FC<HomeProps> = props => {
  const { data: session, status } = useSession();

  return (
    <div className='flex my-6 ml-6'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-3xl text-blue-800'>
        {session
          ? `Welcome back, ${props.data.name}!`
          : 'Sign in to be properly greeted.'}
      </h1>
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://swapi.dev/api/people/1');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
