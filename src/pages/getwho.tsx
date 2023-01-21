import React from 'react';
import { useEffect, useState } from 'react';

const Getwho = () => {
  const [who, setWho] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/loggedinusers');
      const data = await response.json();
      setWho(data.message);
    })();
  }, []);

  return (
    <div className="card border-light m-3">
      <title>Current Users</title>
      <h1 className="card-header"><code>who </code> Command Output</h1>
      <div className="card-body">
          <p className="card-text animate__animated animate__backInRight">The command <code>who</code> shows the current users logged in on a Linux/Unix-Like system.
          </p>
          <code>{who}</code>
      </div>
    </div>
  );
}


export default Getwho;
