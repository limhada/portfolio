import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
// subsets는 폰트에서 사용할 문자 집합을 지정하는 옵션
// latin은 서브셋(subset)의 하나로, 라틴 알파벳 문자 집합을 의미
// Inter는 폰트의 이름이며, next/font/google 패키지에서 제공하는 폰트 중 하나

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  // TypeScript에서 사용되는 타입 주석
  // 이것은 함수의 매개변수로 객체를 받는데, 해당 객체는 children이라는 속성을 가지며 이 속성은 React.ReactNode 타입을 갖는 값이어야 한다는 의미
  children,
}: {
  // React.ReactNode는 React 컴포넌트에서 자식 요소로 허용되는 다양한 타입들을 포함하는 타입
  // JSX에서 사용되는 요소, 문자열, 숫자, 배열 등을 포함
  // RootLayout 컴포넌트는 children이라는 속성을 받아올 때 해당 속성이 JSX 요소나 React 컴포넌트를 포함한 어떤 값이라도 받아들일 수 있게 됨
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
      <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/x-icon" sizes="96x96" href="/favicon/favicon-96x96.png" />
      </head>
      <body className={inter.className}>
        {children}</body>
      {/* 
      RootLayout 컴포넌트의 <body> 요소에 Inter 폰트의 스타일이 적용
      */}
    </html>
  );
}
