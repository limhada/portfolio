'use client';

import Image /* {StaticImageData} */ from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ImageComponent from './components/ImageComponent';
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
    summary: string;
    background: string;
    imageName: string;
    review: string;
    stack: Stack;
  }

  interface Stack {
    frontend: string;
    backend: string;
    deployment: string;
    database: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      image: '/bg1.jpeg',
      imageName: 'guenlog',
      title: '근로그',
      github: 'https://github.com/limhada/seb40_main_028',
      deployment: 'https://realguenlog.vercel.app/start',
      description:
        '지속적이고 꾸준한 운동 습관을 유지할 수 있는 도움을 제공하는 서비스입니다.',
      summary: '요약내용',
      background: '배경내용',
      review: '후기내용~',
      stack: {
        frontend: '자바스크립트',
        backend: '',
        deployment: '버셀?',
        database: '',
      },
    },
    {
      id: 2,
      image: '/bg2.jpeg',
      imageName: 'animaltest',
      title: '동물 성격유형 테스트',
      github: 'https://github.com/limhada/animal-personality-type-test',
      deployment: 'https://animal-personality-type-test.vercel.app/',
      description:
        'Big Five 기법을 사용하여 성격 유형을 테스트하고 나의 성격을 대표하는 동물들을 찾아볼 수 있습니다.',
      summary: '요약내용',
      background: '배경내용',
      review: '후기내용~',
      stack: {
        frontend: '자바스크립트',
        backend: '동물',
        deployment: '버셀?',
        database: '',
      },
    },
    {
      id: 3,
      image: '/bg1.jpeg',
      imageName: 'fortuneteller',
      title: '운세 보는 깜냥이',
      github: 'https://github.com/limhada/fortuneteller',
      deployment: 'https://fortuneteller-eqt.pages.dev/',
      description:
        '인공지능 AI인 ChatGPT를 기반으로 구현하여 깜냥이에게 사람과의 대화처럼 운세를 질문하고 상담할 수 있습니다.',
      summary: '요약내용',
      background: '배경내용',
      review: '후기내용~',
      stack: {
        frontend: '자바스크립트',
        backend: '',
        deployment: '버셀?',
        database: '',
      },
    },
    {
      id: 4,
      image: '/bg2.jpeg',
      imageName: 'guenlog',
      title: '포트폴리오 웹사이트',
      github: 'naver.com',
      deployment: 'naver.com',
      description:
        '자기소개, 기술 스택, 프로젝트, 블로그 등을 소개하는 페이지입니다.',
      summary: '요약내용',
      background: '배경내용',
      review: '후기내용~',
      stack: {
        frontend: '자바스크립트',
        backend: '',
        deployment: '버셀?',
        database: '',
      },
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
            <div className='flex text-white bg-mycolor2'>
              <div className='text-5xl w-full h-auto flex items-center p-5'>
                {project.title}
              </div>
              <div>
                {/* 모달 닫기 버튼 */}
                <button
                  onClick={() => setShowModal(false)}
                  // className='bg-mycolor3 w-10 h-10 md:w-14 md:h-14 m-2 rounded-tl-full rounded-bl-full rounded-br-full'
                  className='bg-mycolor5 w-14 h-14 m-2 rounded-tl-full rounded-bl-full rounded-br-full'
                >
                  닫기
                </button>
              </div>
            </div>
            <div className='p-6 md:flex md:flex-row'>
              {/* FIXME: 상세내용 projects에 추가하기  */}
              {/* <h1 className='text-5xl mt-5'>프로젝트 제목: {project.title}</h1> */}

              <div className='flex flex-col md:ml-[100px]'>
                <div className=' md:w-[800px]'>
                  <ImageComponent {...project}></ImageComponent>
                </div>

                <div>
                  <div className='mb-1 '>
                    GitHub:{' '}
                    <a
                      href={project.github}
                      className='text-sky-400 break-all'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.github}
                    </a>
                  </div>
                  <div className='mb-10  '>
                    Deployment URL :{' '}
                    <a
                      href={project.deployment}
                      className='text-sky-400 break-all'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.deployment}
                    </a>
                  </div>
                </div>
              </div>

              <div className='md:ml-[100px] md:w-[500px]'>
                {/* FIXME: 안쓰면 삭제하기 */}
                {/* <hr className='border-t border-gray-400 my-5' /> */}

                <div className='mb-10'>
                  <h1 className='text-3xl mb-5'>요약</h1>
                  <p className='text-base'>{project.description}</p>
                </div>
                {/* <p>주요기능</p> */}
                <div className='mb-10'>
                  <h1 className='text-3xl mb-5'>배경</h1>
                  <p className='text-base'>개발하게 된 배경</p>
                </div>
                <div className='mb-10'>
                  <h1 className='text-3xl mb-5'>후기</h1>
                  <p className='text-base'>{project.description}</p>
                  <p>테스트 계정</p>
                  <p>힘들었던점</p>
                  <p>해결방법</p>
                </div>
                <p></p>
                <div className='mb-10'>
                  <h1 className='text-3xl mb-5'>사용한 기술</h1>
                  <p>프론트엔드:{project.stack.frontend}</p>
                  <p>백엔드:{project.stack.backend}</p>
                  <p>배포:{project.stack.deployment}</p>
                  <p>데이터베이스:{project.stack.database}</p>
                  {/* <p className='text-base'>{project.description}</p> */}
                </div>
              </div>
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

      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-[20px] md:px-[10%] lg:px-[20%] drop-shadow-lg '>
          {projects.map((el) => (
            <div
              key={el.id}
              className='overflow-hidden rounded-2xl transform transition-all duration-300 ease-linear hover:-translate-y-3 border-white border-[5px]'
              onClick={() => handleClick(el.id)}
            >
              <Image
                src={el.image}
                className='w-full h-[200px] object-cover'
                alt='프로젝트 이미지'
                width={150}
                height={150}
                draggable='false'
              />
              <div className='p-4 bg-white md:h-[180px]'>
                <header className='mb-2'>
                  <h3 className='overflow-hidden font-bold text-ellipsis whitespace-nowrap mb-1'>
                    {el.title}
                  </h3>
                  <hr/>
                </header>
                
                <p className='text-sm text-gray-400 mt-4 h-auto'>{el.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
