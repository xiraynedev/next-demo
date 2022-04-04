import Head from 'next/head';
import {FC, useState, useEffect} from 'react';
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
  const {data: session, status} = useSession();
  const [user, setUser] = useState(props.data.name);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', user);
    } else {
      localStorage.setItem('user', user);
    }
  }, [user]);

  return (
      <div className='flex justify-center mt-8'>
        <Head>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <h1 className='text-3xl text-blue-800'>
          {
            session ? `Welcome back, ${user}!` : 'Sign in to be properly greeted.'
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