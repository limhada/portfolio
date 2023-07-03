'use client';

import Image /* {StaticImageData} */ from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import bg from '../../public/bg.jpeg';
// import bg2 from '../../public/bg.jpeg';

export default function Projects() {
  interface Project {
    id: number;
    // image: StaticImageData; // 이미지파일 import 해서 사용할 때 지정하는 타입
    image: string;
    title: string;
    description: string;
    github: string;
    deployment: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      image: '/bg1.jpeg',
      title: '근로그',
      github: 'https://github.com/limhada/seb40_main_028',
      deployment: 'https://realguenlog.vercel.app/start',
      description:
        '지속적이고 꾸준한 운동 습관을 유지할 수 있는 도움을 제공하는 서비스입니다.',
    },
    {
      id: 2,
      image: '/bg2.jpeg',
      title: '동물 성격유형 테스트',
      github: 'https://github.com/limhada/animal-personality-type-test',
      deployment: 'https://animal-personality-type-test.vercel.app/',
      description:
        'Big Five 기법을 사용하여 성격 유형을 테스트하고 나의 성격을 대표하는 동물들을 찾아볼 수 있습니다.',
    },
    {
      id: 3,
      image: '/bg1.jpeg',
      title: '운세 보는 깜냥이',
      github: 'https://github.com/limhada/fortuneteller',
      deployment: 'https://fortuneteller-eqt.pages.dev/',
      description:
        '인공지능 AI인 ChatGPT를 기반으로 구현하여 깜냥이에게 사람과의 대화처럼 운세를 질문하고 상담할 수 있습니다.',
    },
    {
      id: 4,
      image: '/bg2.jpeg',
      title: '포트폴리오 웹사이트',
      github: 'naver.com',
      deployment: 'naver.com',
      description:
        '자기소개, 기술 스택, 프로젝트, 블로그 등을 소개하는 페이지입니다.',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  const handleClick = (projectId: number) => {
    // 해당 프로젝트의 id를 모달 내용에 추가하는 로직을 구현합니다.
    const project = projects.find((project) => project.id === projectId);
    if (project) {
      // console.log(project, '확인~~');
      const result = (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-slate-200 w-full h-full overflow-auto'>
            <div className='flex text-white'>
              <div className='bg-mycolor2 h-10 w-full flex items-center pl-5'>
                자세히보기
              </div>
              {/* 모달 닫기 버튼 */}
              <button
                onClick={() => setShowModal(false)}
                className='bg-mycolor3 w-10 h-10'
              >
                닫기
              </button>
            </div>
            <div className='px-6 pb-6'>
              {/* FIXME: 상세내용 projects에 추가하기  */}
              <h1 className='text-5xl mt-5'>프로젝트 제목: {project.title}</h1>
              <hr className='border-t border-gray-400 my-5' />
              <p>프로젝트 내용: {project.description}</p>
              <Link href={project.github}>GitHub</Link>
              <br />
              <p>주요기능</p>
              <p>개발배경? 개발한 이유</p>
              <Link href={project.deployment}>배포</Link>
              <p>review:</p>
              <p>사용한 기술 스택</p>
              <p>테스트 계정</p>
              <p>힘들었던점</p>
              <p>해결방법</p>
            </div>
          </div>
        </div>
      );
      setModalContent(result);
    }
    setShowModal(true);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowModal(false);
    }
  };

  // 모달 창이 활성화될 때 기존의 스크롤바를 숨기고 모달 창의 스크롤바만 보이게
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    // 이벤트 리스너가 제거하여  메모리 누수가 방지 위해서  컴포넌트가 unmount될 때 이벤트 리스너를 제거
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  return (
    <div>
      <div>
        {/* 모달 */}
        {showModal && <div>{modalContent}</div>}
      </div>

      {/* FIXME: 프로젝트 내용 넣기 마우스 클릭 시 프로젝트 상세페이지 or  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-[20px] md:px-[10%] lg:px-[20%]'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='overflow-hidden rounded-2xl transform transition-all duration-300 ease-linear hover:-translate-y-3'
            onClick={() => handleClick(project.id)}
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
                  {project.title}
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
