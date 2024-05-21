import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='footer'>
      <span>{currentTime.toLocaleDateString()}</span>
      <span>MADE BY M-M-A</span>
      <span>{currentTime.toLocaleTimeString()}</span>
    </div>
  );
};

export default Footer;
