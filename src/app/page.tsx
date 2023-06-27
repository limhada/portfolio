import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import {
  faPenToSquare,
  faCalendar,
  faUserLarge,
  faMobile,
  faEnvelope,
  // faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import bg from '../../public/bg.jpeg';
import logo_github from '../../public/logo_github.png';
import logo_naver from '../../public/logo_naver.png';
import Skills from './Skills';

export default function Home() {
  // const data = [
  //   { icon: faUserLarge, title: '이름', content: '임종정' },
  //   { icon: faCalendar, title: '생년월일', content: '1995.01.15' },
  //   { icon: faMobile, title: '연락처', content: '010-7157-5537' },
  //   { icon: faPenToSquare, title: '학력', content: '한양대학교' },
  //   { icon: faEnvelope, title: '이메일', content: 'leem1315@gmail.com' },
  // ];

  interface DataItem {
    icon: IconDefinition;
    title: string;
    content: string;
  }

  const data: DataItem[] = [
    { icon: faUserLarge, title: '이름', content: '임종정' },
    { icon: faCalendar, title: '생년월일', content: '1995.01.15' },
    { icon: faMobile, title: '연락처', content: '010-7157-5537' },
    { icon: faPenToSquare, title: '학력', content: '한양대학교' },
    { icon: faEnvelope, title: '이메일', content: 'leem1315@gmail.com' },
  ];

  // 로딩 컴포넌트
  // <FontAwesomeIcon icon={faSpinner} className='animate-spin h-5 w-5' />

  return (
    <div>
      <Navbar />

      {/* ABOUT ME */}
      <div className='flex flex-col items-center px-5 py-5'>
        <h3
          id='목차1'
          className='mb-5 text-xl text-center md:text-2xl lg:text-3xl'
        >
          목차 1 - ABOUT ME
        </h3>
        <div className='grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3'>
          {data.map(({ icon, title, content }) => (
            <div className='flex items-center justify-start p-6' key={title}>
              <FontAwesomeIcon icon={icon} className='h-[30px] w-[30px] mr-5' />
              <div className='text-start'>
                <div className='text-base font-bold md:text-lg lg:text-xl'>
                  {title}
                </div>
                <div className='text-sm md:text-base lg:text-lg'>{content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARCHIVING */}
      <div className='flex flex-col items-center px-5 py-5 bg-mycolor1 '>
        <h3
          id='목차2'
          className='mb-5 text-xl text-center md:text-2xl lg:text-3xl'
        >
          목차 2 - ARCHIVING
        </h3>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {/* FIXME: 호버 시 색상 살짝 변경해주기 */}
          <a
            href='https://github.com/limhada'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-start p-6 bg-white rounded-[10px]'
          >
            <Image
              src={logo_github}
              className='h-[30px] w-[30px] mr-5'
              alt='logo_github'
            />
            <div className='text-start'>
              <div className='text-base font-bold md:text-lg lg:text-xl'>
                github
              </div>
              <div className='text-sm md:text-base lg:text-lg text-sky-400'>
                github.com/limhada
              </div>
            </div>
          </a>

          <a
            href='https://blog.naver.com/leem95'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-start p-6 bg-white rounded-[10px]'
          >
            <Image
              src={logo_naver}
              className='h-[30px] w-[30px] mr-5'
              alt='logo_naver'
            />
            <div className='text-start'>
              <div className='text-base font-bold md:text-lg lg:text-xl'>
                github
              </div>
              <div className='text-sm md:text-base lg:text-lg text-sky-400'>
                blog.naver.com/leem95
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className='flex flex-col items-center px-5 py-5 bg-white'>
        <h3
          id='목차3'
          className='mb-5 text-xl text-center md:text-2xl lg:text-3xl'
        >
          목차 3 - SKILLS
        </h3>
        <Skills></Skills>
        
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <h3
          id='목차4'
          className='mb-5 text-xl text-center md:text-2xl lg:text-3xl'
        >
          목차 4 - 프로젝트
        </h3>
        {/* FIXME: 프로젝트 내용 넣기 마우스 클릭 시 프로젝트 상세페이지 or  */}
        {[...Array(8)].map((_, i) => (
          // transform transition-all duration-300 ease-linear hover:-translate-y-1

          <div
            key={i}
            className='overflow-hidden rounded-2xl transform transition-all duration-300 ease-linear hover:-translate-y-3'
          >
            {/* FIXME: 기록하고 주석 삭제하기  */}
            {/* <img

              // src='https://picsum.photos/200' // 랜덤이미지 맨뒤에 숫자 바꿔서 크기 조정할 수 있음 500/500 이런식으로
              src='/bg.jpeg'
              className='w-full h-[150px] object-cover'
              alt='프로젝트 이미지'
            /> */}

            <Image
              // src='https://picsum.photos/200'
              src={bg}
              className='w-full h-[150px] object-cover'
              alt='프로젝트 이미지'
            />
            <div className='p-4 bg-white'>
              <header className='mb-2'>
                <h3 className='overflow-hidden font-bold text-ellipsis whitespace-nowrap'>
                  {i}번 프로젝트 이름
                </h3>
              </header>
              <p className='text-sm text-gray-400'>
                안녕하세요! 프로젝트 내용!
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <div>lorem</div> */}
    </div>
  );
}
