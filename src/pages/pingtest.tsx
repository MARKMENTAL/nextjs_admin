import { useState, useEffect } from 'react';
import Head from 'next/head';

const PingTest = () => {
  const [urlip, setUrlip] = useState('');
  const [pingData, setPingData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Shows loading text
    setIsLoading(true);
    // Fetches ping result from backend/tells it to ping
    try {
      const response = await fetch(`/api/pingtest?urlip=${urlip}`);
      const data = await response.json();
      setPingData(data.message);
    }
    catch (err) {
      console.error(err);
    }
    finally {
      setIsLoading(false);
    }
  };

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
    <Head>
      <title>Ping Test</title>
    </Head>
    <button onClick={handleTheme} className="btn btn-secondary m-3">Toggle Theme</button>
      <div className="container m-3 p-5 ">
      <form onSubmit={handleSubmit}>
        <div className="form-group m-3">
          
          <h1 className='card-header animate__animated animate__backInRight mb-3'>Ping Test</h1>
          <div className="card-body">
          <p className="card-text">Use this page to test the server's connectivity to other machines.
          </p>
          
          
          <label htmlFor="urlip">Enter IP or URL</label>
          <input
            type="text"
            className="form-control"
            id="urlip"
            value={urlip}
            onChange={(e) => setUrlip(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">Submit</button>
        </div>
      </form>
      
      {isLoading ? (
        <div className="text-center loadingstyle">Server processing Pingtest... <img src="tux.png" alt="Tux the Linux penguin mascot" width="48px" height="48px"></img></div>
      ) : (
        pingData && (
          <div className={`card mt-3 bg-${themetext} text-${themetext}`}>
            <div className={`card-header bg-${theme} text-${themetext}`}>
              Ping Result:
            </div>
            <div className="card-body">
              <pre className="card-text">{pingData}</pre>
            </div>
          </div>
        )
      )}
      </div>
    </>
  );
};

export default PingTest;
