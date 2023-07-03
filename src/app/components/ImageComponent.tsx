import Image from 'next/image';
import { useState } from 'react';
// FIXME: 이미지 슬라이드 공부하고 정리해 놓기
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
  const imgArr: ImageGroup = {
    guenlog: ['/guenlog/test1.png', '/guenlog/test2.png', '/guenlog/test3.png'],
    animaltest: ['/animaltest/test1.png', '/guenlog/test1.png'],
    fortuneteller: ['/fortuneteller/test1.png', '/guenlog/test1.png'],
  };

  const [num, setNum] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const diffX = e.clientX - startX;
    setOffsetX(diffX);
  };

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
      <div
      className="relative w-full h-0 md:w-[500px] md:h-[500px] pb-[100%]  overflow-hidden"
      onMouseMove={handleMouseMove}
      >
        {imgArr[props.imageName].map((src, index) => (
          // FIXME: 볼더 라디우스 줄지말지 결정하기
          <Image
            key={index}
            src={src}
            alt={''}
            width={100}
            height={100}
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
                  return 'translateX(100%)'; // num < index인 나머지 이미지를 오른쪽으로 이동
                }
              })(),
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            draggable='false'
          />
        ))}
      </div>

      <div>
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
        {num + 1}
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
