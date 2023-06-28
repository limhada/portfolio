'use client';

import Image /* {StaticImageData} */ from 'next/image';
// import bg from '../../public/bg.jpeg';
// import bg2 from '../../public/bg.jpeg';

export default function Projects() {
  interface Project {
    id: number;
    // image: StaticImageData; // 이미지파일 import 해서 사용할 때 지정하는 타입
    image: string;
    name: string;
    description: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      // image: bg,
      image: '/bg1.jpeg',
      name: '프로젝트 1',
      description: '안녕하세요! 프로젝트 1 내용입니다.',
    },
    {
      id: 2,
      // image: bg2,
      image: '/bg2.jpeg',
      name: '프로젝트 2',
      description: '안녕하세요! 프로젝트 2 내용입니다.',
    },
    {
      id: 1,
      // image: bg,
      image: '/bg1.jpeg',
      name: '프로젝트 1',
      description: '안녕하세요! 프로젝트 1 내용입니다.',
    },
    {
      id: 2,
      // image: bg2,
      image: '/bg2.jpeg',
      name: '프로젝트 2',
      description: '안녕하세요! 프로젝트 2 내용입니다.',
    },
    {
      id: 1,
      // image: bg,
      image: '/bg1.jpeg',
      name: '프로젝트 1',
      description: '안녕하세요! 프로젝트 1 내용입니다.',
    },
    {
      id: 2,
      // image: bg2,
      image: '/bg2.jpeg',
      name: '프로젝트 2',
      description: '안녕하세요! 프로젝트 2 내용입니다.',
    },
    {
      id: 1,
      // image: bg,
      image: '/bg1.jpeg',
      name: '프로젝트 1',
      description: '안녕하세요! 프로젝트 1 내용입니다.',
    },
    {
      id: 2,
      // image: bg2,
      image: '/bg2.jpeg',
      name: '프로젝트 2',
      description: '안녕하세요! 프로젝트 2 내용입니다.',
    },
    {
      id: 1,
      // image: bg,
      image: '/bg1.jpeg',
      name: '프로젝트 1',
      description: '안녕하세요! 프로젝트 1 내용입니다.',
    },
    {
      id: 2,
      // image: bg2,
      image: '/bg2.jpeg',
      name: '프로젝트 2',
      description: '안녕하세요! 프로젝트 2 내용입니다.',
    },
  ];

  const handle = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* FIXME: 프로젝트 내용 넣기 마우스 클릭 시 프로젝트 상세페이지 or  */}
      {/* TODO: 화면 크기에 따라 px값 조절하기 */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-[20px] md:px-[10%] lg:px-[20%]'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='overflow-hidden rounded-2xl transform transition-all duration-300 ease-linear hover:-translate-y-3'
            onClick={handle}
          >
            <Image
              src={project.image}
              className='w-full h-[200px] object-cover'
              alt='프로젝트 이미지'
              width={150}
              height={150}
            />
            <div className='p-4 bg-white'>
              <header className='mb-2'>
                <h3 className='overflow-hidden font-bold text-ellipsis whitespace-nowrap'>
                  {project.name}
                </h3>
              </header>
              <p className='text-sm text-gray-400'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
