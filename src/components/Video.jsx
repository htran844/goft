import React from 'react'
import { FaAngleDown } from "react-icons/fa";

export default function Video() {
  return (
    <section id="video">
  <div className="viewed">
    <h2>Video Trailer</h2>
    <iframe
      id="tv"
      className="tv"
      style={{ width: "100%",  }}
      frameBorder={0}
      allowFullScreen={1}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      title="Your Favorite Free Golf Game | WGT Golf by Topgolf"
      width="958.4"
    //   height={540}
      src="https://www.youtube.com/embed/beAljYfNc0Y?autoplay=0&controls=2&iv_load_policy=3&modestbranding=true&origin=https%3A%2F%2Fwww.wgt.com&rel=0&showinfo=0&theme=dark&enablejsapi=1&widgetid=1"
    />
  </div>
  <a className="scrolltap" href="#about" title="Scroll down">
    <span>
    <FaAngleDown />
    </span>
  </a>
</section>

  )
}
