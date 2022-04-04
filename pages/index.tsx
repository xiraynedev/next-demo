import Head from 'next/head';
import {FC} from 'react';
import {useSession} from 'next-auth/react';

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
  }
}

const HomePage: FC<HomeProps> = (props) => {
  const name = props.data.name;
  const {data: session, status} = useSession();

  return (
      <div className='flex justify-center mt-8'>
        <Head>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <h1 className='text-3xl text-blue-800'>
          {
            session ? `Welcome back, ${name}!` : 'Sign in to be properly greeted.'
          }
        </h1>
      </div>
  )
}

export default HomePage;

export const getStaticProps = async () => {

  const response = await fetch('https://swapi.dev/api/people/1');
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};