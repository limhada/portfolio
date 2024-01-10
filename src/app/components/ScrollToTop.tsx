'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onScroll = (): void => {
    // 스크롤이 위치에 따라 top버튼을 화면에 렌더링 할지 여부
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isVisible ? (
    <div
      onClick={handleScrollToTop}
      // 기존 top 버튼 디자인
      // className='fixed right-2 bottom-3 w-5 h-5 md:right-8 md:bottom-8 md:w-10 md:h-10 border-2 border-gray-500 opacity-50 rounded-md text-sm md:text-lg flex items-center justify-center cursor-pointer'
      className='group fixed right-2 bottom-3 w-5 h-5 md:right-8 md:bottom-8 md:w-10 md:h-10 transform rotate-45 rounded-b-full rounded-r-full border-2 border-gray-500 text-sm md:text-lg flex items-center justify-center cursor-pointer hover:bg-mycolor5 opacity-100 hover:border-white'
      // className='bg-mycolor5 h-10 w-10 lg:w-14 lg:h-14 m-2 transform rotate-45 rounded-b-full rounded-r-full'
    >
      <div className='-rotate-45 text-gray-500 group-hover:text-white'>⬆</div>
    </div>
  ) : null;
}
