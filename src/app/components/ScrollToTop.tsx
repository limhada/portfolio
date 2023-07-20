'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onScroll = () => {
    // 스크롤이 위치에 따라 top버튼을 화면에 렌더링 할지 말지
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
    <div>
      {/* FIXME: top버튼 모양 물방울 모양으로 할지 정하기 */}
      {/* 물방울 모양 */}
      {/* <div className='w-24 h-24 bg-blue-500 rounded-tr-full rounded-bl-full rounded-br-full transform rotate-45'></div> */}
      <div
        onClick={handleScrollToTop}
        className='fixed right-2 bottom-3 w-5 h-5 md:right-8 md:bottom-8 md:w-10 md:h-10 border-2 border-gray-500 opacity-50 rounded-md text-sm md:text-lg flex items-center justify-center cursor-pointer'
      >
        ⬆
      </div>
    </div>
  ) : null;
}
