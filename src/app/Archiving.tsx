import Image, { StaticImageData } from 'next/image';

import logo_github from '../../public/logo_github.png';
import logo_naver from '../../public/logo_naver.png';

export default function Archiving() {
  interface LinkItem {
    title: string;
    url: string;
    logo: StaticImageData;
  }

  const data: LinkItem[] = [
    {
      title: 'github',
      url: 'github.com/limhada',
      logo: logo_github,
    },
    {
      title: 'naver blog',
      url: 'blog.naver.com/leem95',
      logo: logo_naver,
    },
  ];

  return (
    <div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 pb-5'>
        {/* 반복되는 부분을 map 함수로 생성 */}
        {data.map((item, index) => (
          <a
            key={index}
            href={`https://${item.url}`}
            target='_blank'
            rel='noopener noreferrer'
            /*
            noopener noreferrer <a> 요소의 HTML 속성 중 하나입니다. 각 부분에 대한 설명은 다음과 같습니다:
            rel: 링크와 연결된 문서와의 관계를 지정하는 속성입니다. noopener noreferrer는 보안 및 웹 표준을 준수하기 위해 사용되는 값입니다.
            noopener: 새로 열린 링크가 window.opener 속성을 통해 원래 문서에 접근하지 못하도록 방지합니다. 이는 보안상의 이유로 사용됩니다.
            noreferrer: 링크를 통해 이동할 때 HTTP 리퍼러(Referer) 헤더를 전송하지 않도록 방지합니다. 이는 사용자의 개인 정보 보호를 위해 사용됩니다.
            따라서 rel='noopener noreferrer'는 보안 및 개인 정보 보호 측면에서 링크를 안전하게 처리하기 위해 사용되는 속성입니다.
            */
            className='flex items-center justify-start p-6 bg-white rounded-[10px]'
          >
            <Image
              src={item.logo}
              className='h-[30px] w-[30px] mr-5'
              alt={`logo_${item.title}`}
            />
            <div className='text-start'>
              <div className='text-base font-bold md:text-lg lg:text-xl'>
                {item.title}
              </div>
              <div className='text-sm md:text-base lg:text-lg text-sky-400'>
                {item.url}
              </div>
            </div>
          </a>
        ))}
        
      </div>
      
    </div>
  );
}
