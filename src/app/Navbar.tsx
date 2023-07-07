'use client';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

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
    { title: '목차1' },
    { title: '목차2' },
    { title: '목차3' },
    { title: '목차4' },
  ];

  const [menuBt, SetMenuBt] = useState(false);

  return (
    <div>
      <div className='fixed top-0 w-full h-[100px] bg-white z-50'>
      {/* <div className={`fixed top-0 w-full h-[${navHeight}px] bg-white`}> */}
        <div className='flex justify-between mb-5 '>
          <div
            onClick={handleScrollToTop}
            className='mx-[10px] my-[10px] bg-blue text-xl md:text-4xl z-50'
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
            className='md:hidden mt-[20px] w-[25px] h-[25px] z-50'
          />

          {/* <div className='flex flex-row mt-3 '> */}
          <div className='hidden md:flex flex-row mt-[10px]'>
            {data.map(({ title }, i) => (
              <div
                key={i}
                onClick={() => {
                  handleScroll(title);
                }}
                className='mx-[10px] my-[10px] cursor-pointer'
              >
                {title}
              </div>
            ))}
          </div>
        </div>
        {menuBt ? (
          <div className='fixed top-[0px] right-0 bg-mycolor2 w-full pt-[100px] z-[40]'>
            {data.map(({ title }, i) => (
              <div
                key={i}
                onClick={() => {handleScroll(title); SetMenuBt(!menuBt)}}
                className='mx-[10px] my-[10px] cursor-pointer'
              >
                {title}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className=" text-white h-[500px] bg-[url('/bg.jpeg')] bg-cover bg-center">
        <div className='mx-5'>
          <div className='flex flex-col text-center pt-[150px]'>
            <div className='text-[50px]'>
              - 임종정 -<br /> 웹 개발자 포트폴리오
            </div>
            <div className='text-[30px]'>
              <br />
              안녕하세요 꾸준함을 실천하고 몰입을 즐기는 <br />웹 프론트엔드
              개발자로 성장을 추구하는 임종정입니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
