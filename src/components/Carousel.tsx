import React, { useCallback, useEffect, useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = useCallback(
    () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)),
    [slides.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className='relative overflow-hidden'>
      <div
        className='flex rounded-lg transition-transform duration-500 ease-out'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          onClick={prev}
          className='rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white'
        >
          {LuChevronLeft({ title: 'Previous' })}
        </button>
        <button
          onClick={next}
          className='rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white'
        >
          {LuChevronRight({ title: 'Next' })}
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((s, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full bg-white transition-all  ${
                curr === i ? 'p-0.5' : 'bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
