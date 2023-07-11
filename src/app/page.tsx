import Navbar from './Navbar';
import Aboutme from './Aboutme';
import Archiving from './Archiving';
import Skills from './Skills';
import Projects from './Projects';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  // 로딩 컴포넌트
  // <FontAwesomeIcon icon={faSpinner} className='animate-spin h-5 w-5' />

  return (
    <div>
      <Navbar />

      {/* ABOUT ME */}
      <div className='flex flex-col items-center px-5 py-5'>
        <h3
          id='ABOUT ME'
          className='mb-5 text-xl text-center md:text-2xl lg:text-3xl font-bold'
        >
          ABOUT ME
        </h3>
        <Aboutme></Aboutme>
      </div>

      {/* ARCHIVING */}
      <div className='flex flex-col items-center px-5 py-5 bg-mycolor1 '>
        <h3
          id='ARCHIVING'
          className='mb-5 text-xl text-center md:text-2xl lg:text-3xl text-white font-bold'
        >
          ARCHIVING
        </h3>
        {/* FIXME: 호버 시 색상 살짝 변경해주기 */}
        <Archiving></Archiving>
      </div>

      <div className='flex flex-col items-center px-5 py-5 bg-white font-bold'>
        <h3
          id='SKILLS'
          className='mb-5 text-xl text-center md:text-2xl lg:text-3xl'
        >
          SKILLS
        </h3>
        <Skills></Skills>
      </div>

      <div className='flex flex-col  px-5 py-5  bg-mycolor4'>
        <h3
          id='목차4'
          className='mb-5 text-xl text-center md:text-2xl lg:text-3xl text-white font-bold'
        >
          PROJECTS
        </h3>
        <Projects></Projects>
      </div>

      <div className='flex flex-col  px-5 py-5 bg-white font-bold'>
        <h3
          id='PROJECTS'
          className='mb-5 text-xl text-center md:text-2xl lg:text-3xl'
        >
          CAREER
        </h3>
        <div>
          내용~
        </div>
      </div>
      <ScrollToTop/>
      {/* <button id="scrollButton" className="fixed right-10 bottom-10 bg-lime-600"
            >닫기⬆️</button> */}
    </div>
  );
}
