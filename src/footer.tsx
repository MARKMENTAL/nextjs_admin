import React, { useState } from 'react';


const Footer = () => {
  return (
        <footer className="py-3 text-center">
          <div className="container">
            <a className="btn btn-primary mx-1 m-3 p-3" href="/">Home</a>
            <a className="btn btn-primary mx-1 m-3 p-3" href="/getsysinfo">System Info</a>
            <a className="btn btn-primary mx-1 m-3 p-3" href="/distros">Distros</a>
            <a className="btn btn-primary mx-1 m-3 p-3" href="/getdiskspace">Disk Space</a>
            <a className="btn btn-primary mx-1 m-3 p-3" href="/pingtest">Ping Test</a>
            <a className="btn btn-primary mx-1 m-3 p-3" href="/traceroute">TraceRoute</a>
          </div>
        </footer>
  )
}

export default Footer;



