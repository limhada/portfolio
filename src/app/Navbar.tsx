'use client';

// import Link from 'next/link';

export default function Navbar() {
  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = (e: string): void => {
    const element = document.getElementById(e);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <div>
      <div className=" text-white h-[500px] bg-[url('/bg.jpeg')] bg-cover bg-center">
        <div className='mx-5'>
          <div className='flex justify-between mb-5'>
            <div
              onClick={handleScrollToTop}
              className='mx-[10px] my-[10px] bg-blue text-[30px]'
            >
              LJJ
              <br />
              Portfolio
            </div>
            {/* FIXME: 수정하기 top버튼만들고 LJJPortfolio 클릭 시 메인페이지로 이동하게 */}
            {/* 목차1 목차2 버튼 영역 글씨에 딱맞게 조정하기 */}
            <div className='flex flex-row mt-3 '>
              {data.map(({ title }, i) => (
                <div
                  key={i}
                  
                  onClick={() => handleScroll(title)}
                  className='mx-[10px] my-[10px] cursor-pointer'
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col text-center'>
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
