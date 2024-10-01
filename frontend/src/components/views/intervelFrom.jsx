import React from 'react';

export const IntervelFrom = ({
  interval,
  setInterval,
  timer,
  handleSetInterval,
}) => {
  return (
    <div className='max-w-xl mx-auto mt-10 px-4 py-6  shadow-md rounded mb-8'>
      <h1 className=' text-white text-[26px] sm:text-[35px] md:text-[57px] font-[VioletSans]'>
        Transactions
      </h1>

      <div>
        <label
          htmlFor='interval'
          className='block text-sm font-medium text-gray-700'
        >
          <p className='font-light text-[#EEEEEE] my-[11px] sm:my-[15px] md:my-[20px] lg:my-[26px] font-[RobotoMonoLight] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[14px] leading-tight tracking-widest pe-[6px]'>
            Enter the interval in minutes
          </p>
        </label>
        <input
          id='interval'
          name='interval'
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className='mt-1 block font-[Nippo]  w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Enter interval in minutes'
        />
      </div>
      <button
        className='clipButton font-[Nippo] max-w-[200px] mt-5'
        onClick={handleSetInterval}
      >
        Set Interval
      </button>

      <p className='text-base select-none flex gap-2 items-center absolute text-white mt-2'>
        {timer !== 0 && timer !== null ? (
          <span>
            Your transactions will be refreshed in{' '}
            <span className='text-[#02ebb5]'>{timer}</span> seconds
          </span>
        ) : (
          ''
        )}
      </p>
    </div>
  );
};
