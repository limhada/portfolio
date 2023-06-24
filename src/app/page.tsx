import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';
import {
  faPenToSquare,
  faCalendar,
  faUserLarge,
  faMobile,
  faEnvelope,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import bg from '../../public/bg.jpeg';
import 배경 from '../../public/배경.jpeg';

export default function Home() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const data = [
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
            <div className='flex items-center justify-start p-6 ' key={title}>
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

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {[...Array(8)].map((_, i) => (
          // transform transition-all duration-300 ease-linear hover:-translate-y-1

          <div
            key={i}
            className='overflow-hidden rounded-2xl transform transition-all duration-300 ease-linear hover:-translate-y-3'
          >
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
