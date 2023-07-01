'use client';

import { useEffect, useState } from "react";




export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onScroll = () => {
    if (window.scrollY > 100) {
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
