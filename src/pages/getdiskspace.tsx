import React from 'react';
import { useEffect, useState } from 'react';

const Getdisk = () => {
  const [df, setDf] = useState('');
  const [theme, setTheme] = useState('dark');
  const [themetext, setThemetext] = useState('white');

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setThemetext(themetext === 'white' ? 'dark' : 'white');
    document.body.className = `bg-${theme} text-${themetext}`;
  }

  useEffect(() => {
    handleTheme();
    (async () => {
      const response = await fetch('/api/diskfree');
      const data = await response.json();
      setDf(data.message);
    })();
  }, []);
  



  return (
    <>
    <button onClick={handleTheme} className="btn btn-secondary m-3">Toggle Theme</button>
    <div className={`card border-light m-3 bg-${theme} text-${themetext}`}>
      <title>Server Disk Space</title>
      <h1 className="card-header"><code>df -h</code> Command Output</h1>
      <div className="card-body">
          <p className="card-text animate__animated animate__backInRight">The command <code>df -h</code> stands for "disk free" and it's used to check the available and used disk space on a Linux system. The '-h' option is used to display the sizes in a "human-readable" format, which means that the sizes will be displayed in a more convenient format such as GB or MB rather than in bytes. The command outputs the file system, the total size, the used space, the available space, and the percentage of used space for each file system found on the system.
          </p>
          <pre>{df}</pre>
      </div>
    </div>
    </>
  );
}


export default Getdisk;
