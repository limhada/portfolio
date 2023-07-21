import Image from 'next/image';
import { useState } from 'react';
interface Project {
  id: number;
  image: string;
  title: string;
  github: string;
  deployment: string;
  description: string;
  background: React.ReactNode;
  imageName: string;
}

type ImageGroup = {
  [key: string]: string[];
};

export default function ImageComponent(props: Project): React.ReactElement {
  const imgArr: ImageGroup = {
    guenlog: [
      '/guenlog/i1.gif',
      '/guenlog/i2.gif',
      '/guenlog/i3.gif',
      '/guenlog/i4.gif',
      '/guenlog/i5.gif',
      '/guenlog/i6.png',
    ],
    animaltest: [
      '/animaltest/i1.png',
      '/animaltest/i2.png',
      '/animaltest/i3.gif',
    ],
    fortuneteller: [
      '/fortuneteller/i1.png',
      '/fortuneteller/i2.png',
      '/fortuneteller/i3.png',
      '/fortuneteller/i4.png',
    ],
    portfolio: [
      '/portfolio/i1.png',
      '/portfolio/i2.png',
      '/portfolio/i3.png',
      '/portfolio/i4.png',
      '/portfolio/i5.png',
      '/portfolio/i6.png',
      '/portfolio/i7.png',
    ],
  };

  const [num, setNum] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent): void => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent): void => {
    if (!dragging) return;
    const diffX = e.clientX - startX;
    setOffsetX(diffX);
  };

  const handleMouseUp = (): void => {
    setDragging(false);
    if (offsetX > 50) {
      if (num > 0) setNum(num - 1);
    } else if (offsetX < -50) {
      if (num < imgArr[props.imageName].length - 1) setNum(num + 1);
    }
    setOffsetX(0);
  };

  // 터치 슬라이드 로직
  const handleTouchStart = (e: React.TouchEvent): void => {
    setDragging(true);
    setStartX(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    if (!dragging) return;
    const diffX = e.changedTouches[0].clientX - startX;
    setOffsetX(diffX);
  };

  const handleTouchEnd = (): void => {
    handleMouseUp(); // 마우스 이벤트 처리와 동일한 로직을 수행하므로 기존의 handleMouseUp 함수를 호출
  };

  return (
    <div>
      <div
        className='relative w-full md:w-[700px] h-0 pb-[120%] md:pb-[110%] overflow-hidden shadow-md rounded-md'
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {imgArr[props.imageName].map((src: string, index: number) => (
          <Image
            key={index}
            src={src}
            alt={''}
            width={700}
            height={770}
            quality={100}
            className={`absolute top-0 left-0 w-full h-full ${
              dragging ? '' : 'transition-transform duration-700'
            }`}
            style={{
              transform: ((): string => {
                if (num === index) {
                  return `translateX(${offsetX}px)`;
                } else if (index === num + 1) {
                  return `translateX(calc(100% + ${offsetX}px))`;
                } else if (index < num) {
                  return `translateX(calc(-100% + ${offsetX}px))`;
                } else {
                  return 'translateX(100%)';
                  // num < index인 나머지 이미지를 오른쪽으로 이동
                }
              })(),
              // objectFit: "contain", // 이미지를 원본사이즈로
              objectFit: 'fill',
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            draggable='false'
          />
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <button
          className={`w-10 h-10 ${
            num === 0 ? 'opacity-50 cursor-default' : ''
          }`}
          onClick={() => {
            if (num > 0) {
              setNum(num - 1);
            }
          }}
        >
          &lt;
        </button>
        {/* 이미지 번호 출력 */}
        {num + 1} / {imgArr[props.imageName].length}
        <button
          className={`w-10 h-10 ${
            num === imgArr[props.imageName].length - 1
              ? 'opacity-50 cursor-default'
              : ''
          }`}
          onClick={() => {
            if (num < imgArr[props.imageName].length - 1) {
              setNum(num + 1);
            }
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
