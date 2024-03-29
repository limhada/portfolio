import GoogleAnalytics from './components/GoogleAnalytics';
import './globals.css';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
// subsets는 폰트에서 사용할 문자 집합을 지정하는 옵션
// latin은 서브셋(subset)의 하나로, 라틴 알파벳 문자 집합을 의미
// Inter는 폰트의 이름이며, next/font/google 패키지에서 제공하는 폰트 중 하나

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto"
});

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
        {process.env.GA4_TRACKING_ID && (
          <GoogleAnalytics
            GA4_TRACKING_ID={process.env.GA4_TRACKING_ID as string}
          />
        )}
        {/* 구글 서치콘솔 */}
        <meta
          name='google-site-verification'
          content='BrM_y3EPAr9M_IHutlP1nEnWmnCz57NOIlrl85V79u4'
        />
        {/* 네이버 웹마스터도구 */}
        <meta
          name='naver-site-verification'
          content='0efd18d7a9aa2ee40d748298fc6bbd4178026585'
        />

        <title>LJJ Portfolio</title>
        <meta
          name='description'
          content='프론트엔드 웹 개발자 임종정의 포트폴리오입니다.'
        />
        <meta
          name='keywords'
          content='LJJ 포트폴리오, LJJ portfolio, 임종정, 임종정 포트폴리오, 프론트엔드, 프론트엔드 포트폴리오, frontend portfolio, frontend, 포트폴리오, portfolio, 웹개발자, 개발자'
        />

        {/* 기별 표시 설정 */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        {/* Open Graph Protocol (Facebook, Twitter 등에 페이지가 올바르게 표시되게 함) */}
        <meta property='og:title' content='LJJ Portfolio' />
        <meta
          property='og:description'
          content='프론트엔드 웹 개발자 임종정의 포트폴리오입니다.'
        />
        <meta
          property='og:image'
          content='https://portfolio-limhada.vercel.app//LJJPortfolio.png'
        />
        <meta
          property='og:url'
          content='https://portfolio-limhada.vercel.app/'
        />
        {/* <meta property="og:type" content="Type of Page (e.g., website, article, video, etc.)" /> */}
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='LJJ Portfolio' />

        {/* 로봇 메타태그 */}
        {/* <meta name="naver-site-verification" content="your-site-verification-key"/> */}
        {/* 네이버 웹마스터 도구에서 제공하는 사이트 인증 키를 사용하여 웹 페이지가 네이버 검색 엔진에 정상적으로 등록되었는지 확인할 수 있습니다. */}
        <meta name='naverbot' content='index,follow' />
        <meta name='robots' content='index, follow' />

        <link
          rel='icon'
          type='image/x-icon'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/x-icon'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/x-icon'
          sizes='96x96'
          href='/favicon/favicon-96x96.png'
        />
      </head>
      <body className={roboto.className}>{children}</body>
      {/* 
      RootLayout 컴포넌트의 <body> 요소에 Inter 폰트의 스타일이 적용
      */}
    </html>
  );
}
