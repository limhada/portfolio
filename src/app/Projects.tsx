'use client';

import Image /* {StaticImageData} */ from 'next/image';
// import Link from 'next/link';
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
    background: React.ReactNode;
    imageName: string;
    review: React.ReactNode;
    stack: Stack;
  }

  interface Stack {
    frontend: string;
    backend: string;
    deployment: string;
    database: string;
  }

  // FIXME: 근로그 테스트계정 및 배포 주소 백엔드 기능 x aws 기간 만료
  // 근로그 로그인 안해도 둘러볼 수 있게 재배포할지 고민하기
  const guenlog = {
    background: (
      <div>
        근로그 서비스는 운동하려고 마음만 계속 먹는 분들, 집 근처 체육관을
        찾다가 포기하시는 분들,
        <br />
        어떤 운동이 있는지 몰라서 못하시는 분들을 생각하며 어떻게하면 더 많은
        사람들이 운동에 관심과 습관을 가질 수 있을지 고민하고 필요하다고 느낀
        서비스 아이디어를 모아 개발한 프로젝트 입니다!
        <br />
        저희 서비스는 사용자가 직접 운동을 계획해 참여도를 이끌어내어 책임감을
        가질 수 있도록 하였고 몸무게 변화와 매달 운동한 횟수를 그래프로 표현하여
        성취감을 느낄 수 있습니다.
        <br />
        운동을 갓 시작하시는 분들을 위해 주변 체육관을 검색할 수 있도록 카카오
        지도 API를 연동했습니다. 운동 동작 이미지 첨부해 사용자가 동작을 확인할
        수 있습니다. YouTube API를 이용해 헬스에 관련한 동영상을 추천하는
        서비스를 제공합니다.
      </div>
    ),
    reviw: (
      // FIXME: 줄바꿈 하기
      <div>
        평소에도 흔하게 사용하는 로그인과 로그아웃 기능을 직접 구현해보니까
        생각보다 쉽지 않았습니다. 그래서 여러 기능들이 모여 하나의 프로젝트가
        완성된다는 것의 중요성과 각각기능들의 소중함을 알게 되었습니다.
        프로젝트를 진행하면서 신경 썼던 부분은 유효성검사가 있습니다. 사용자에게
        데이터를 입력 받을 때 올바른 데이터만 입력 받기 위해 꼼꼼하게 제약조건을
        걸어 두었습니다. 예를들면 회원가입 페이지의 경우 닉네임의 경우 한글,
        영문, 숫자를 제외한 값을 입력하지 못하도록 차단하여 최대한 서버로 보낼
        데이터에 문제가 생기지 않도록 사전에 예방하였습니다. OAuth2를 통해
        구글로그인을 구현하는 과정에서 기존의 익숙한 Frontend에서 Backend와 직접
        통신하는 방식이 아닌 Frontend에서 GoogleServer를 거쳐 Backend와 통신하는
        것에 어려움이 있었습니다. 해결방법은 URLSearchParams를 사용하여 문제를
        해결했습니다. URLSearchParams는URL의 쿼리 문자열에 대한 작업을 할 수
        있는 메서드 제공하며 그 중에서 get메서드를 사용했습니다. get메서드는
        해당 파라미터의 value 출력하고, 없을 시에는 null값을 출력합니다.
        URLSearchParams의 get메서드를 사용하여 accesstoken 값과 처음 로그인하는
        사용자인지 여부를 판별하는 데이터를 가져올 수 있었고 문제를 해결할 수
        있었습니다. 문제를 해결하는 과정에서 팀원들과의 소통이 무엇보다
        중요하다는 점을 느꼈습니다. 여러 사람들의 의견을 통해 다양한 방법을
        시도한 끝에 해결방법을 찾을 수 있었기 때문입니다.
        {/* FIXME: 추가 내용 근로그를 만들어서 평소에 취미로 하던 운동을 조금 더 재미있게 즐길 수 있게 되었다. 등등 내용 추가하기 */}
      </div>
    ),
  };

  // FIXME: 복사용
  // const fortuneteller = {
  //   background: (
  //     <div>

  //     </div>
  //   ),
  //   reviw: (
  //     <div>

  //     </div>
  //   ),
  // };

  // FIXME: 복사용
  // const fortuneteller = {
  //   background: (
  //     <div>

  //     </div>
  //   ),
  //   reviw: (
  //     <div>

  //     </div>
  //   ),
  // };

  const projects: Project[] = [
    {
      id: 1,
      image: '/guenlog/i0.png',
      imageName: 'guenlog',
      title: '근로그(팀)',
      github: 'https://github.com/limhada/seb40_main_028',
      deployment: 'https://realguenlog.vercel.app/start',
      description:
        '지속적이고 꾸준한 운동 습관을 유지할 수 있는 도움을 제공하는 서비스입니다.',
      summary: '요약내용',
      background: guenlog.background,
      review: guenlog.reviw,
      stack: {
        frontend:
          'react, react-router, JavaScript, TailwindCSS, styled-components, axios, Recoil',
        backend: 'Java, Spring Boot, Gradle',
        deployment: 'vercel, aws,',
        database: 'mysql',
      },
    },
    {
      id: 2,
      image: '/animaltest/i2.png',
      imageName: 'animaltest',
      title: '동물 성격유형 테스트(개인)',
      github: 'https://github.com/limhada/animal-personality-type-test',
      deployment: 'https://animal-personality-type-test.vercel.app/',
      description:
        'Big Five 기법을 사용하여 성격 유형을 테스트하고 나의 성격을 대표하는 동물들을 찾아볼 수 있습니다.',
      summary: '요약내용',
      background: guenlog.background,
      review:
        'ChatGPT를 활용하여 BigFive기법과 같은 생소한 정보를 보다 정확하게 이해하고 원하는 형태로 사용하는 방법을 습득했습니다.',
      stack: {
        frontend: 'react, styled-components',
        backend: '',
        deployment: 'vercel',
        database: '',
      },
    },
    {
      id: 3,
      image: '/fortuneteller/i1.png',
      imageName: 'fortuneteller',
      title: '운세 보는 깜냥이(개인)',
      github: 'https://github.com/limhada/fortuneteller',
      deployment: 'https://fortuneteller-eqt.pages.dev/',
      description:
        '인공지능 AI인 ChatGPT를 기반으로 구현하여 깜냥이에게 사람과의 대화처럼 운세를 질문하고 상담할 수 있습니다.',
      summary: '요약내용',
      background: guenlog.background,
      review: '카카오에드핏 광고내용, ',
      stack: {
        frontend: 'JavaScript',
        backend: 'node.js Express, AWS Lambda Functions, serverless-http',
        deployment: 'cloudflare',
        database: '',
      },
    },
    {
      id: 4,
      image: '/portfolio/i1.png',
      imageName: 'portfolio',
      title: '포트폴리오 웹사이트(개인)',
      github: 'https://github.com/limhada/portfolio',
      deployment: 'https://portfolio-limhada.vercel.app/',
      description:
        '자기소개, 기술 스택, 프로젝트, 블로그 등을 소개하는 페이지입니다.',
      summary: '요약내용',
      background: guenlog.background,
      review: '후기내용~',
      stack: {
        frontend: 'Next.js, TypeScript, TailwindCSS',
        backend: '',
        deployment: 'vercel',
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
          <div className='bg-white w-full h-full overflow-auto'>
            <div className='flex text-white bg-mycolor4'>
              <div className='text-1xl md:text-3xl lg:text-5xl w-full h-auto flex items-center p-5'>
                {project.title}
              </div>
              <div>
                {/* 모달 닫기 버튼 */}
                <button
                  onClick={() => setShowModal(false)}
                  // className='bg-mycolor3 w-10 h-10 md:w-14 md:h-14 m-2 rounded-tl-full rounded-bl-full rounded-br-full'
                  className='bg-mycolor5 h-10 w-10 lg:w-14 lg:h-14 m-2 rounded-tl-full rounded-bl-full rounded-br-full'
                >
                  닫기
                </button>
              </div>
            </div>
            <div className='p-6 pt-10 lg:flex lg:flex-row'>
              {/* FIXME: 상세내용 projects에 추가하기  */}
              {/* <h1 className='text-5xl mt-5'>프로젝트 제목: {project.title}</h1> */}

              <div className='flex flex-col md:ml-[100px]'>
                {/* <div className=' md:w-[800px]'> */}
                <ImageComponent {...project}></ImageComponent>
                {/* </div> */}

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
                  <div>
                    QR코드 자리
                    {/* FIXME: QR코드 넣기 */}
                  </div>
                </div>
              </div>

              <div className='md:ml-[100px]'>
                {/* FIXME: 안쓰면 삭제하기 */}
                {/* <hr className='border-t border-gray-400 my-5' /> */}

                <div className='mb-10'>
                  <h1 className='text-3xl mb-5 font-bold'>요약</h1>
                  <p className='text-base md:text-xl'>{project.description}</p>
                </div>
                {/* <p>주요기능</p> */}
                <div className='mb-10 text-base md:text-xl'>
                  <h1 className='text-3xl mb-5 font-bold'>기술</h1>
                  <div>프론트엔드: {project.stack.frontend}</div>
                  {project.stack.backend ? (
                    <div>백엔드: {project.stack.backend}</div>
                  ) : null}
                  <div>배포: {project.stack.deployment}</div>
                  {project.stack.database ? (
                    <div>데이터베이스: {project.stack.database}</div>
                  ) : null}
                </div>
                <div className='mb-10'>
                  <h1 className='text-3xl mb-5 font-bold'>내용</h1>
                  <div className='text-base md:text-xl'>
                    {project.background}
                  </div>
                </div>
                <div className='mb-10'>
                  <h1 className='text-3xl mb-5 font-bold'>후기</h1>
                  <div className='text-base md:text-xl'>{project.review}</div>
                  {/* <div>테스트 계정</div> */}
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-[20px] md:px-[10%] lg:px-[20%] drop-shadow-lg pb-10'>
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
                quality={100}
              />
              <div className='p-4 bg-white md:h-[180px]'>
                <header className='mb-2'>
                  <h3 className='overflow-hidden font-bold text-ellipsis whitespace-nowrap mb-1 '>
                    {el.title}
                  </h3>
                  <hr />
                </header>

                <p className='text-sm text-gray-400 mt-4 h-auto'>
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
