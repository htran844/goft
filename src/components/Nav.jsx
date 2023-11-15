import React, { useEffect, useState } from "react";

export default function Nav() {
    const [tog, setTog] = useState(false)
    useEffect(()=>{

    }, [])

  return (
    <nav id="nav" role="navigation" className={tog? "tog": ""}>
      <a id="toggle" href="#" aria-label="Toggle navigation" className="" onClick={()=>setTog(pre=>!pre)}>
        <b />
        <b />
        <b />
      </a>
      <ul role="menubar">
        <li role="menuitem" className="navlogin">
          <a className="login" href="/login.aspx" aria-controls="login">
            <b>Sign In</b>
          </a>
        </li>
        <li role="menuitem">
          <a href="/code/">
            <b>Redeem Code</b>
          </a>
        </li>
        <li role="menuitem">
          <a href="#video">
            <b>About Us</b>
          </a>
        </li>
        <li role="menuitem">
          <a href="#courses">
            <b>Golf Courses</b>
          </a>
        </li>
        <li role="menuitem">
          <a href="#bottom">
            <b>Download</b>
          </a>
        </li>
        <li role="menuitem">
          <a href="https://m.wgt.com/help">
            <b>Help/FAQ</b>
          </a>
        </li>
        <li role="menuitem">
          <a
            href="https://www.topgolfmedia.com/?utm_source=wgt&utm_medium=web&utm_campaign=advertise"
            rel="noopener"
            target="_blank"
          >
            <b>Advertise</b>
          </a>
        </li>
      </ul>
    </nav>
  );
}
