'use client';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

// import Link from 'next/link';

export default function Navbar() {
  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navHeight = 100;
  const handleScroll = (e: string): void => {
    const element = document.getElementById(e);

    if (element) {
      const yOffset =
        element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  interface DataItem {
    title: string;
  }

  const data: DataItem[] = [
    { title: 'ABOUT ME' },
    { title: 'ARCHIVING' },
    { title: 'SKILLS' },
    { title: 'PROJECTS' },
  ];

  const [menuBt, SetMenuBt] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target && !target.closest('.menu')) {
      SetMenuBt(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768 && menuBt) {
      SetMenuBt(false);
    }
  };

  useEffect(() => {
    if (menuBt) {
      document.addEventListener('click', handleClickOutside);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuBt]);

  return (
    <div>
      <div className='fixed top-0 w-full h-[100px] bg-white z-40 drop-shadow-lg'>
        {/* <div className={`fixed top-0 w-full h-[${navHeight}px] bg-white`}> */}
        <div className='flex justify-between mb-5 '>
          <div
            onClick={handleScrollToTop}
            className='mb-[10px] mt-[20px] my-[10px] ml-[10px] md:mt-[10px] bg-blue text-2xl md:text-4xl z-50 font-bold hover:text-mycolor1 cursor-pointer'
          >
            LJJ
            <br />
            Portfolio
          </div>
          {/* FIXME: 수정하기 top버튼만들고 LJJPortfolio 클릭 시 메인페이지로 이동하게 */}
          {/* 목차1 목차2 버튼 영역 글씨에 딱맞게 조정하기 */}

          <FontAwesomeIcon
            icon={faBars}
            onClick={() => SetMenuBt(!menuBt)}
            className='md:hidden mt-[20px] mr-[10px] w-[25px] h-[25px] z-50 hover:text-mycolor1 cursor-pointer'
          />

          {/* <div className='flex flex-row mt-3 '> */}
          <div className='hidden md:flex flex-row mt-[10px] font-bold'>
            {data.map(({ title }, i) => (
              <div
                key={i}
                onClick={() => {
                  handleScroll(title);
                }}
                // FIXME: 높이 다시 설정하기
                className='mx-[10px] my-[10px] cursor-pointer h-[30%] text-slate-500 hover:text-mycolor1 '
              >
                {title}
              </div>
            ))}
          </div>
        </div>
        {menuBt ? (
          <div className='fixed top-[0px] right-0 bg-white w-full pt-[100px] z-[40] menu reveal-box'>
            {data.map(({ title }, i) => (
              <div
                key={i}
                onClick={() => {
                  handleScroll(title);
                  SetMenuBt(!menuBt);
                }}
                // FIXME: 배경색 변경하기
                className='mx-[10px] my-[10px] cursor-pointer font-bold hover:text-mycolor1 text-slate-500' // bg-slate-200
                style={{ width: 'max-content' }}
              >
                {title}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className=" text-white h-[500px] bg-[url('/bg.jpeg')] bg-cover bg-center">
        <div className='mx-5'>
          <div className='flex flex-col text-center pt-[210px] md:pt-[140px] lg:pt-[120px]'>
            {/* <div className='text-[50px]'>
              - 임종정 -<br /> 웹 개발자 포트폴리오
            </div> */}
            <div className='text-[20px] md:text-[40px] lg:text-[50px]'>
              <br />
              꾸준함을 실천하고 몰입을 즐기며
              <br />웹 프론트엔드 개발자로 성장을 추구하는
              <br />
              임종정입니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
