import React, { useEffect, useState } from 'react';
import Head from 'next/head'

const Index = () => {
  const [theme, setTheme] = useState('dark');
  const [themetext, setThemetext] = useState('white');

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setThemetext(themetext === 'white' ? 'dark' : 'white');
    document.body.className = `bg-${theme} text-${themetext}`;
  }
  useEffect(() => {
    handleTheme();
  }, []);
  
  return (
    <>
    <div>
      
    <Head>
      <title>Next.Js Admin Home Page</title>
    </Head>
    <button onClick={handleTheme} className="btn btn-secondary m-3">Toggle Theme</button>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="card border mb-3 mt-3">
        <div className={`bg-${themetext} card-body text-${theme}`}>
          <h1 className="card-header ">Welcome to Next.Js Admin <img src="tux.png" alt="Tux the Linux penguin mascot" width="48px" height="48px"></img></h1>
          <p className='card-body animate__animated animate__backInRight'>This is a basic general purpose Linux admin panel designed by <a href="https://github.com/markmental" target="_blank">markmental</a></p>
          <a className="btn btn-primary rounded-pill m-3" href="/getsysinfo">Get System Information</a>
          <a className="btn btn-primary rounded-pill m-3" href="/distros">List of Linux Distros</a>
          <a className="btn btn-primary rounded-pill m-3" href="/getdiskspace">Check Disk Space</a>
          <a className="btn btn-primary rounded-pill m-3" href="/pingtest">Ping Test</a>
          <a className="btn btn-primary rounded-pill m-3" href="/traceroute">TraceRoute</a>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
export default Index
