'use client';

import { useEffect, useState } from "react";

// TODO: 설명 추가하기


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
      <div
        onClick={handleScrollToTop}
        className="fixed right-2 bottom-3 w-5 h-5 md:right-8 md:bottom-8 md:w-10 md:h-10 bg-white border-2 border-rose-500 text-sm md:text-lg flex items-center justify-center"
      >⬆️</div>
    </div>
  ) : null;
}
