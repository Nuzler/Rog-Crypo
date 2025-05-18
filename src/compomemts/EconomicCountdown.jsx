import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const EconomicCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [eventTime, setEventTime] = useState(null);
  const [eventTitle, setEventTitle] = useState('Bitcoin Block Reward Halving Countdown');

 

  useEffect(() => {
  

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(eventTime).getTime();
      const target1 = new Date('2028-04-13T07:09:24Z').getTime();
      const distance = target1 - now;
      

      if (distance < 0) {
        setTimeLeft("Live Now");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({days,hours,minutes,seconds});
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log("count Down",timeLeft);

  const boxLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  
  const boxRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className=" text-[#1CFA1D]  py-2 rounded shadow-md text-sm font-semibold flex flex-col gap-2 items-center">
      <motion.div
  initial="hidden"
  animate="visible"
  className='grid grid-cols-4 gap-4'
>
  {/* Left 1 */}
  <motion.div variants={boxLeft} className='flex flex-col border-5 p-10 rounded-2xl bg-black items-center'>
    <h1 className='xl:text-5xl text-4xl'>{timeLeft.days}</h1>
    <h1 className='text-md'>Days</h1>
  </motion.div>

  {/* Left 2 */}
  <motion.div variants={boxLeft} className='flex flex-col border-5 p-10 rounded-2xl bg-black items-center'>
    <h1 className='xl:text-5xl text-4xl'>{timeLeft.hours}</h1>
    <h1 className='text-md'>Hour</h1>
  </motion.div>

  {/* Right 1 */}
  <motion.div variants={boxRight} className='flex flex-col border-5 p-10 rounded-2xl bg-black items-center'>
    <h1 className='xl:text-5xl text-4xl'>{timeLeft.minutes}</h1>
    <h1 className='text-md'>Min</h1>
  </motion.div>

  {/* Right 2 */}
  <motion.div variants={boxRight} className='flex flex-col border-5 p-10 rounded-2xl bg-black items-center'>
    <h1 className='xl:text-5xl text-4xl'>{timeLeft.seconds}</h1>
    <h1 className='text-md'>Sec</h1>
  </motion.div>
</motion.div>
      <div className='flex flex-col items-center'>
        <h1 >{eventTitle}</h1>
      </div>
    </div>
  );
};

export default EconomicCountdown;