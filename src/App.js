import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
{/*import Article from './components/Article';*/}
import Elements from './components/Elements';
import Scripts from './components/Scripts';
import Delocalizers from './components/Delocalizers';
import Names from './components/Names';

function App() {
  useEffect(() => {
    const jqscript = document.createElement('script');
    const browserscript = document.createElement('script');
    const breakpointscript = document.createElement('script');
    const utilscript = document.createElement('script');
    const mainscript = document.createElement('script');

    jqscript.src = `${process.env.PUBLIC_URL}/assets/js/jquery.min.js`;
    jqscript.async = true;

    browserscript.src = `${process.env.PUBLIC_URL}/assets/js/browser.min.js`;
    browserscript.async = true;

    breakpointscript.src = `${process.env.PUBLIC_URL}/assets/js/breakpoints.min.js`;
    breakpointscript.async = true;

    utilscript.src = `${process.env.PUBLIC_URL}/assets/js/util.js`;
    utilscript.async = true;

    mainscript.src = `${process.env.PUBLIC_URL}/assets/js/main.js`;
    mainscript.async = true;

    document.body.appendChild(jqscript);
    document.body.appendChild(browserscript);
    document.body.appendChild(breakpointscript);
    document.body.appendChild(utilscript);
    document.body.appendChild(mainscript);
    return () => {
      document.body.removeChild(jqscript);
      document.body.removeChild(browserscript);
      document.body.removeChild(breakpointscript);
      document.body.removeChild(utilscript);
      document.body.removeChild(mainscript);
    }
  }, []);
  return (
    <div id="wrapper">
      <Header />
      <div id="main">
        <Delocalizers />
        <Names />
        <Scripts />
        {/* <Article id="intro" title="Intro" imageSrc={`${process.env.PUBLIC_URL}/images/pic01.jpg`}>
          Aenean ornare velit lacus, ac varius enim ullamcorper eu...
        </Article> */}
        <Elements />
      </div>
      <Footer />
      <div id="bg"></div>
    </div>
  );
}

export default App;
