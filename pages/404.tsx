import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const NotFound: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(3);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          router.push('/');
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className='error_page'>
      <h1 className='error'>404 - Topilmadi</h1>
      <p className='count'>{countdown} soniyada ortga qaytiladi</p>
    </div>
  );
};

export default NotFound;