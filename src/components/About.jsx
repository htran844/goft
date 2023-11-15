import React from 'react'
import { FaAngleDown } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
  <div>
    <h2>About Us</h2>
    <div className="content">
      <p>
        World Golf Tour is the most realistic free online golf game, loved by
        more than 15 million players across the globe. It's the #1 top rated 3D
        online sports game, as seen on NBC Sports, Golf Channel, DirecTV, &amp;
        Fox Sports. Built with cutting-edge GPS &amp; 3D technology, this is not
        just a sports game, but the most accurate full game simulation
        available.
        <span className="tbo">
          Unlike many other popular online golf games, WGT Golf is not limited
          to a single platform. You can play WGT Golf on Windows PC, Mac, or
          your favorite mobile device (iOS, Android, Amazon).
        </span>
      </p>
      WGT Golf includes:
      <ul>
        <li>
          Pro Shop with upgraded virtual golf clubs and golf balls from
          Callaway, Titleist, TaylorMade, Ping, and other top golf equipment
          manufacturers
        </li>
        <li>Over 20 world famous golf courses</li>
        <li>Head-to-head multi-player game mode</li>
        <li>Thousands of country clubs</li>
        <li className="tbo">
          Realistic 3D golf simulation to recreate swinging, driving, chipping
          and putting from different lies on the fairway, rough, bunkers and
          greens
        </li>
      </ul>
    </div>
  </div>
  <a className="scrolltap light" href="#courses" title="Scroll down">
    <span>
    <FaAngleDown />
    </span>
  </a>
</section>

  )
}
