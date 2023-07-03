'use client';
import Image /* {StaticImageData} */ from 'next/image';
import { useState } from 'react';

interface Project {
  id: number;
  image: string;
  title: string;
  github: string;
  deployment: string;
  description: string;
  summary: string;
  background: string;
  imageName: string;
}

type ImageGroup = {
  [key: string]: string[];
};

export default function ImageComponent(props: Project) {
  // const imgArr: string[] = ['/guenlog/test1.png', '/bg2.jpeg',];
  const imgArr: ImageGroup = {
    guenlog: ['/guenlog/test1.png', '/guenlog/test2.png', '/guenlog/test3.png'],
    animaltest: ['/animaltest/test1.png', '/guenlog/test1.png'],
    fortuneteller: ['/fortuneteller/test1.png', '/guenlog/test1.png'],
  };

  const [num, setNum] = useState(0);

  // 드래그 관련 상태 추가
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  // 드래그 시작
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  // 드래그 중
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const diffX = e.clientX - startX;
    setOffsetX(diffX);
  };

  // 드래그 종료
  const handleMouseUp = () => {
    setDragging(false);
    if (offsetX > 50) {
      if (num > 0) setNum(num - 1);
    } else if (offsetX < -50) {
      if (num < imgArr[props.imageName].length - 1) setNum(num + 1);
    }
    setOffsetX(0);
  };

  return (
    <div>
      <div className='relative w-[500px] h-[500px] overflow-hidden'>
        {imgArr[props.imageName].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={''}
            width={100}
            height={100}
            className={`absolute top-0 left-0 md:w-[500px] md:h-[500px] transition-transform duration-700`}
            style={{
              transform: ((): string => {
                if (num === index) {
                  return `translateX(${offsetX}px)`;
                } else if (num < index) {
                  // 마지막 이미지에서 다른 이미지로 이동하지 않도록 수정
                  return index === imgArr[props.imageName].length - 1 &&
                    num === 0
                    ? 'translateX(100%)'
                    : `translateX(calc(100% + ${offsetX}px))`;
                } else {
                  return `translateX(calc(-100% + ${offsetX}px))`;
                }
              })(),
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            draggable='false'
          />
        ))}
        {/* <img src={imgArr[props.imageName][num]} alt={''} /> */}
      </div>

      <div>
        <button
          className='w-10 h-10'
          onClick={() => {
            if (num > 0) {
              setNum(num - 1);
            }
          }}
        >
          &lt;
        </button>
        <button
          className='w-10 h-10'
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
