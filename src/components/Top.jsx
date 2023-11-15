import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Top() {
    // window.addEventListener('resize', checkResize);
    // const [fontsz, setFontsz] = useState(1)
    // function checkResize() {
    //     let size = 1372/26
    //     setFontsz(window.innerWidth / size)
    // }
  return (
    <section id="top" style={{ height: 750 }}>
      <h1>World Golf Tour</h1>
      <div>
        <div className="blurb">
          <h3 className="h3_top">
            Play the online golf game <nobr>loved by millions.</nobr>
          </h3>
        </div>
        <div className='bigbutton topbutton'>
          <a
            className="w"
            href="signup/"
            title="Join for free to play on all platforms"
          >
            Play Now
          </a>
          <a
            className="m"
            href="https://m.wgt.com/download?utm_source=wgt&utm_medium=web&utm_campaign=root_apps"
          >
            Play Now
          </a>
        </div>
      </div>
      <a className="scrolltap light" href="#video" title="Scroll down">
        <span>
        <FaAngleDown />
        </span>
      </a>
    </section>
  );
}
