// import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './Navbar';
import {
  faPenToSquare,
  faCalendar,
  faUserLarge,
  faMobile,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  // const handleScrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }

  return (
    <div>
      <Navbar />

      {/* text-white bg-slate-800 */}
      <div className='px-2 py-2 '>
        <h3 id='목차1' className='text-center'>
          목차 1 - ABOUT ME
        </h3>
        <div className='grid grid-cols-2 gap-4 text-center'>
          <div className='flex items-center justify-center '>
            <FontAwesomeIcon icon={faUserLarge} className='h-[30px] w-[30px]' />
            <div className='text-start'>
              <div>이름</div>
              <div>임종정</div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <FontAwesomeIcon icon={faCalendar} className='h-[30px] w-[30px]' />
            <div className='text-start'>
              <div className='font-bold'>생년월일</div>
              <div>1995.01.15</div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <FontAwesomeIcon icon={faMobile} className='h-[30px] w-[30px]' />
            <div className='text-start'>
              <div>연락처</div>
              <div>010-7157-5537</div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <FontAwesomeIcon icon={faEnvelope} className='h-[30px] w-[30px]' />
            <div className='text-start'>
              <div>이메일</div>
              <div>leem1315@gmail.com</div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className='h-[30px] w-[30px]'
            />
            <div className='text-start'>
              <div className='font-bold'>학력</div>
              <div>한양대학교</div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      
      
      
      
      */}
      <div className='grid grid-cols-3 gap-5'>
        {[...Array(8)].map((_, i) => (
          <div key={i} className='overflow-hidden rounded-2xl'>
            <img
              src='https://picsum.photos/200'
              className='w-full h-[150px] object-cover'
              alt='랜덤이미지'
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
