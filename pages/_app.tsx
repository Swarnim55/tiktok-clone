import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  //making SSR option available for smooth rendering
  const [isSSR, setIsSSR] = useState(true);

  //setting SSR to false once the page loads and returns to client side
  useEffect(() => {
    setIsSSR(false);
  }, []);

  //if SSR we don't want to render our components

  if (isSSR) return null;

  return (
    <>
      Navbar
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          Sidebar
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1 ">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default App;
