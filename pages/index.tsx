import Head from 'next/head';

const HomePage = ({data}: any) => {

  return (
      <div className='flex justify-center mt-8'>
        <Head>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <h1 className='text-3xl text-blue-800'>Welcome back, {data.name}!</h1>
      </div>
  )
}

export default HomePage;

export const getStaticProps = async () => {

  const response = await fetch('https://swapi.dev/api/people/1');
  const data = await response.json();

  return {
    props: {
      data
    },
    revalidate: 30,
  };
};