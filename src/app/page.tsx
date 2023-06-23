// import Image from 'next/image';

export default function Home() {
  return (
    <div>
      메인페이지
      <div className='h-screen bg-gray-100'>
        {/* <nav className='bg-primary py-4'> */}
        {/* <div className='container mx-auto px-5'> */}
        <h1 className='font-bold text-xl'>portfolio</h1>
        {/* </div> */}
        {/* </nav> */}

        {/* <div className='container mx-auto'>
          <header className='mb-4'>
            <h2 className='font-bold text-lg'>내 게시물</h2>
          </header>
        </div> */}
        <div>목차 1 - ABOUT ME</div>

        <div className='grid grid-cols-4 gap-5'>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='rounded-2xl overflow-hidden'>
              <img
                src='https://picsum.photos/200'
                className='w-full h-[150px] object-cover'
                alt='랜덤이미지'
              />
              <div className='p-4 bg-white'>
                <header className='mb-2'>
                  <h3 className='font-bold text-ellipsis whitespace-nowrap overflow-hidden'>
                    {i}번 프로젝트 이름
                  </h3>
                </header>
                <p className='text-gray-400 text-sm'>
                  안녕하세요! 프로젝트 내용!
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div>lorem</div> */}
        <div className='grid grid-cols-2'></div>
      </div>
    </div>
  );
}
