'use client';

import Link from 'next/link';

export default function Navbar() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = (e: string) => {
    const element = document.getElementById(e);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className=" text-white h-[500px] bg-[url('/배경.jpeg')] bg-cover bg-center">
        <div className='mx-5'>
          <div className='flex justify-between mb-5'>
            <div
              onClick={handleScrollToTop}
              className='mx-[10px] my-[10px] bg-blue text-[30px]'
            >
              LJJ<br/>Portfolio
            </div>

            <div className='flex flex-row mt-3'>
              <div
                onClick={() => handleScroll('목차1')}
                className='mx-[10px] my-[10px]'
              >
                목차1
              </div>
              <div
                onClick={() => handleScroll('목차1')}
                className='mx-[10px] my-[10px]'
              >
                목차2
              </div>
              <div
                onClick={() => handleScroll('목차1')}
                className='mx-[10px] my-[10px]'
              >
                목차3
              </div>
              <div
                onClick={() => handleScroll('목차1')}
                className='mx-[10px] my-[10px]'
              >
                목차4
              </div>
            </div>
          </div>
          <div className='flex flex-col text-center'>
            <div className='text-[50px]'>
              - 임종정 -<br /> 웹 개발자 포트폴리오
            </div>
            <div className='text-[30px]'>
              <br />
              안녕하세요 꾸준함을 실천하고 몰입을 즐기는 <br/>웹 프론트엔드 개발자로
              성장을 추구하는 임종정입니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
