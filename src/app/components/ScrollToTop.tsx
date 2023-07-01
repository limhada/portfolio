'use client';

export default function ScrollToTop() {
  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div
        onClick={handleScrollToTop}
        className="fixed right-10 bottom-10 bg-lime-600 border-2 border-rose-500 w-10 h-10"
      >⬆️</div>
    </div>
  );
}
