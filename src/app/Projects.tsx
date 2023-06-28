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
      image: '/bg1.jpeg',
      name: '근로그',
      description:
        '지속적이고 꾸준한 운동 습관을 유지할 수 있는 도움을 제공하는 서비스입니다.',
    },
    {
      id: 2,
      image: '/bg2.jpeg',
      name: '동물 성격유형 테스트',
      description:
        'Big Five 기법을 사용하여 성격 유형을 테스트하고 나의 성격을 대표하는 동물들을 찾아볼 수 있습니다.',
    },
    {
      id: 3,
      image: '/bg1.jpeg',
      name: '운세 보는 깜냥이',
      description:
        '인공지능 AI인 ChatGPT를 기반으로 구현하여 깜냥이에게 사람과의 대화처럼 운세를 질문하고 상담할 수 있습니다.',
    },
    {
      id: 4,
      image: '/bg2.jpeg',
      name: '포트폴리오 웹사이트',
      description:
        '자기소개, 기술 스택, 프로젝트, 블로그 등을 소개하는 페이지 입니다.',
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-[20px] md:px-[10%] lg:px-[20%]'>
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
