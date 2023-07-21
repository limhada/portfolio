// import { useRouter } from 'next/router';
// import { useEffect } from 'react';

// export const GA_TRACKING_ID = 'G-7KN64VCFVV';

// // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = (url: URL) => {
//   window.gtag('config', GA_TRACKING_ID, {
//     page_path: url,
//   });
// };

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = (
//   action: Gtag.EventNames,
//   { event_category, event_label, value }: Gtag.EventParams,
// ) => {
//   window.gtag('event', action, {
//     event_category,
//     event_label,
//     value,
//   });
// };

// // route가 변경될 때 gtag에서
// export const useGtag = () => {
//   const router = useRouter();

//   useEffect(() => {
//     if (process.env.NODE_ENV === 'development') return;

//     const handleRouteChange = (url: URL) => {
//       pageview(url);
//     };

//     router.events.on('routeChangeComplete', handleRouteChange);
//     router.events.on('hashChangeComplete', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//       router.events.off('hashChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);
// };

// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID;

// // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = (url: URL) => {
//   window.gtag('config', GA_TRACKING_ID as string, {
//     page_path: url,
//   });
// };

// type GTagEvent = {
//   action: string;
//   category: string;
//   label: string;
//   value: number;
// };

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }: GTagEvent) => {
//   window.gtag('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   });
// };