import React from 'react';
import { useEffect, useState } from 'react';

const Getcmd = () => {
  const [uname, setUname] = useState('');

  
  const [theme, setTheme] = useState('dark');
  const [themetext, setThemetext] = useState('white');

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setThemetext(themetext === 'white' ? 'dark' : 'white');
    document.body.className = `bg-${theme} text-${themetext}`;
  }

  // Runs on component load
  useEffect(() => {
    handleTheme();
    (async () => {
      const response = await fetch('/api/runcmd');
      const data = await response.json();
      setUname(data.message);
    })();
  }, []);

  return (
    <>
    <button onClick={handleTheme} className="btn btn-secondary m-3">Toggle Theme</button>
    <div className="card border-light m-3">
      <title>Uname Command Output</title>
      <h1 className={`card-header text-${theme} bg-${themetext}`}>Command Output</h1>
      <div className={`card-body text-${theme} bg-${themetext}`}>
          <p className="card-text animate__animated animate__backInRight">The command <code>uname -a</code> is used to get system information such as hostname and kernel version.
          </p>
          
          <div className={`card-text bg-${themetext} text-${theme}`}>
              <pre className="card-text">{uname}</pre>
          </div>
      </div>
    </div>
    </>
  );
}


export default Getcmd;
