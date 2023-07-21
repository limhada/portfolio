// // ...
// import * as gtag from '../lib/gtag';
// import Script from "next/script";

// export default function App() {
//   gtag.useGtag();

//   return (
//     <>
//       {/* ... */}
//       {process.env.NODE_ENV !== 'development' && (
//         <>
//           {/* Global Site Tag (gtag.js) - Google Analytics */}
//           <Script
//             strategy="afterInteractive"
//             src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
//           />
//           <Script
//             id="gtag-init"
//             strategy="afterInteractive"
//             dangerouslySetInnerHTML={{
//               __html: `
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', '${gtag.GA_TRACKING_ID}', {
//                   page_path: window.location.pathname,
//                 });
//               `,
//             }}
//           />
//         </>
//       )}
//     </>
//   );
// }

// pages/_app.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app"; // 추가: AppProps 타입 임포트

function MyApp({ Component, pageProps }: AppProps) { // 수정: AppProps 타입 사용
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => { // 타입 지정
      window.gtag("config", "G-7KN64VCFVV", {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
