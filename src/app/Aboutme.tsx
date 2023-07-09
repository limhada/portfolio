import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import {
  faPenToSquare,
  faCalendar,
  faUserLarge,
  faMobile,
  faEnvelope,
  // faSpinner,
} from '@fortawesome/free-solid-svg-icons';

export default function Aboutme() {
  interface DataItem {
    icon: IconDefinition;
    title: string;
    content: string;
  }

  const data: DataItem[] = [
    { icon: faUserLarge, title: '이름', content: '임종정' },
    { icon: faCalendar, title: '생년월일', content: '1995.01.15' },
    { icon: faMobile, title: '연락처', content: '010-7157-5537' },
    { icon: faPenToSquare, title: '학력', content: '한양대학교 정보융합전공' },
    { icon: faEnvelope, title: '이메일', content: 'leem1315@gmail.com' },
  ];

  return (
    <div>
      <div className='grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3'>
        {data.map(({ icon, title, content }) => (
          <div className='flex items- justify-start p-6' key={title}>
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
  );
}
