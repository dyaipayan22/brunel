import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface TimerProps {
  interval: number;
  redirectUrl?: string;
}

const Timer: FC<TimerProps> = ({ interval, redirectUrl }) => {
  const [timeInterval, setTimeInterval] = useState<number>(interval);
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timeInterval > 0) {
        setTimeInterval((prevTimeInterval) => prevTimeInterval - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (redirectUrl) {
      if (timeInterval === 0) {
        navigate(redirectUrl);
      }
    }
  }, [timeInterval, navigate, redirectUrl]);

  return (
    <div className="absolute bottom-8 text-[20px] leading-[26px] text-center text-[#727272]">
      Redirecting you to Homepage in{' '}
      <span className="font-bold text-primary">{timeInterval} Seconds</span>
    </div>
  );
};

export default Timer;
