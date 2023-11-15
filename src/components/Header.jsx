import React, { useState } from "react";

export default function Header() {
    const [scroll, setScroll] = useState(false)
    window.onscroll = function() {
        console.log(window.innerHeight)
        if(window.innerHeight > 0) {
          setScroll(true)
        }
        if(window.pageYOffset === 0) {
            setScroll(false)
          }
      };
  return (
    <header className={scroll ? "scrolled" : ""}>
      <div role="navigation">
        <a
          className="download"
          href="https://m.wgt.com/download?utm_source=wgt&utm_medium=web&utm_campaign=root_apps"
        >
          Play Now
        </a>
        <a className="logo" href="home/" title="World Golf Tour homepage">
          <img
            src="../../public/logoheader.png"
            width={100}
            alt="WGT Golf"
          />
        </a>
        <div className="menu" role="menubar">
          <a
            role="menuitem"
            className="w signup"
            href="signup/"
            title="New to WGT? Click here!"
          >
            Play Now
          </a>
          <a
            role="menuitem"
            className="m signup"
            href="https://m.wgt.com/download?utm_source=wgt&utm_medium=web&utm_campaign=root_apps"
          >
            Play Now
          </a>
          <a role="menuitem" href="#video" title="Video trailer" className="">
            About Us
          </a>
          <a
            role="menuitem"
            href="#courses"
            title="Play real-world courses online"
            className=""
          >
            Golf Courses
          </a>
          <a
            role="menuitem"
            className="login"
            href="myprofile.aspx"
            title="Existing member? Click here!"
            aria-controls="login"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
