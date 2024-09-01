import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number}) => {
  return (
    <div className='w-full flex justify-center'>
      <CountUp end={amount}
      decimal='.'
      prefix='$'
      decimals={2}
      duration={2}
      />
    </div>
  );
};

export default AnimatedCounter;