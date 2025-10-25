/// <reference types="vite/client" />

// Declare module for .lottie files
declare module '*.lottie' {
  const src: string;
  export default src;
}

