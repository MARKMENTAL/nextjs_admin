import { Html, Head, Main, NextScript } from 'next/document'
import React, { useState, useEffect } from 'react';

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head>
      // <link rel="stylesheet" href="bootstrap.min.css"></link>
      // <link rel="stylesheet" href="animate.min.css"/>
      // <link rel="stylesheet" href="prestyles.css"></link>
//       </Head>
//         <Main />
//         <NextScript />
        // <footer className="bg-light py-3 text-center">
        //   <div className="container">
        //     <a className="btn btn-primary mx-1 m-3 p-3" href="/">Home</a>
        //     <a className="btn btn-primary mx-1 m-3 p-3" href="/getsysinfo">System Info</a>
        //     <a className="btn btn-primary mx-1 m-3 p-3" href="/distros">Distros</a>
        //     <a className="btn btn-primary mx-1 m-3 p-3" href="/getdiskspace">Disk Space</a>
        //     <a className="btn btn-primary mx-1 m-3 p-3" href="/pingtest">Ping Test</a>
        //     <a className="btn btn-primary mx-1 m-3 p-3" href="/traceroute">TraceRoute</a>
        //   </div>
        // </footer>

//     </Html>
//   )
// }

export default function MyDocument() {

  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="bootstrap.min.css"></link>
      <link rel="stylesheet" href="animate.min.css"/>
      <link rel="stylesheet" href="prestyles.css"></link>
      </Head>
      <body className='bg-white text-black'>

      </body>
        <Main />
        <NextScript />
    </Html>
  );
}
