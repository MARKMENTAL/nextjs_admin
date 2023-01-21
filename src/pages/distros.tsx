import { useState, useEffect } from 'react';

const Distros = () => {
  // Initializing the distros array with a typed empty array to satisfy
  // typescript type infering
  const [distros, setDistros] = useState<{name: string; version: string; packageManager: string;}[]>([]);
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
      const response = await fetch('/api/linuxdb');
      const data = await response.json();
      console.log(data);
      setDistros(data.data);
    })();
  }, []);

 

  return (
    <div className="container">
      <button onClick={handleTheme} className="btn btn-secondary m-3">Toggle Theme</button>
      <h1 className="text-center my-3 animate__animated animate__backInRight">Linux Distros</h1>
      <div className="card-deck">
        {distros.map((distro) => (
          <div className="card m-3" key={distro.name}>
            <div className="card-body">
              <h5 className={`card-title bg-${theme} text-${themetext}`}>{distro.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Version: {distro.version}
              </h6>
              <p className={`card-text bg-${themetext} text-${theme}`}>
                Package Manager: {distro.packageManager}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Distros