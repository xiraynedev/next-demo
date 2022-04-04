import {FC, useState, useEffect} from 'react';
import {getSession, signIn} from 'next-auth/react';

const Index: FC = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!await getSession()) {
        signIn();
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h1 className='text-3xl text-green-500'>Loading now...</h1>
  }

  return (
    <div className='flex flex-col m-4'>
      <h1 className='text-3xl text-green-500'>Dashboard page</h1>
    </div>
  )
}

export default Index;