/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
declare global {
  interface Window {
    gtag: (
      type: "config" | "event" | "set" | "js",
      eventName: string,
      config?: any
    ) => void;
  }
}