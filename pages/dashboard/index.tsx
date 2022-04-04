import {FC, useState, useEffect} from 'react';
import {getSession} from 'next-auth/react';
import {useRouter} from 'next/router';

const Dashboard: FC = () => {

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!await getSession()) {
        router.push('/');
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

export default Dashboard;