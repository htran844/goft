import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
  <div className="footer1">
  <div className="bigbutton bottombutton">
  <a
    className="w scrolled"
    href="signup/"
    title="Join for free to play on all platforms"
  >
    Play Now
  </a>
  <a
    className="m scrolled"
    href="https://m.wgt.com/signup?utm_source=wgt&utm_medium=web&utm_campaign=root_apps"
  >
    Play Now
  </a>
</div>

    <div className="apps">
      <a
        className="mobile apple"
        href="https://m.wgt.com/download/apple-tablet?utm_source=wgt&utm_medium=web&utm_campaign=root_apps"
        aria-label="iOS app"
      />
      <a
        className="mobile google"
        href="https://m.wgt.com/download/google-tablet?utm_source=wgt&utm_medium=web&utm_campaign=root_apps"
        aria-label="Android app"
      />
      <a
        className="mobile amazon"
        href="https://m.wgt.com/download/amazon-tablet?utm_source=wgt&utm_medium=web&utm_campaign=root_apps"
        aria-label="Amazon Fire app"
      />
      <a
        className="desktop windows"
        href="https://m.wgt.com/download/microsoft-desktop?utm_source=wgt&utm_medium=web&utm_campaign=root_apps"
        title="Download Windows app"
      />
      <a className="desktop macos" title="Available on macOS" />
    </div>
    <figure
      id="qr"
      title="Use camera or QR code app"
      style={{ left: "304.45px", top: 88, display: "none" }}
    >
      <canvas height={144} width={144} style={{ height: 144, width: 144 }} />
    </figure>
    <div className="social">
      <a
        rel="noopener"
        target="_blank"
        href="https://twitter.com/WGTgolf"
        title="Twit X"
      >
        <FaTwitter />
      </a>
      <a
        rel="noopener"
        target="_blank"
        href="https://facebook.com/WGTgolf"
        title="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        rel="noopener"
        target="_blank"
        href="https://instagram.com/WGTgolf"
        title="Instagram"
      >
       <FaInstagramSquare />
      </a>
      <a
        rel="noopener"
        target="_blank"
        href="https://www.tiktok.com/@WGTgolf"
        title="TikTok"
      >
      <FaTiktok />
      </a>
      <a
        rel="noopener"
        target="_blank"
        href="https://twitch.tv/WGTgolf"
        title="Twitch"
      >
        <FaTwitch />
      </a>
    </div>
    <div className="clear" />
  </div>
  <div className="footer2">
    <div>
      <div className="copyright">
        <b>©2023 World Golf Tour ™</b>
        <br />
        <img
          src="https://securewgt-a.akamaihd.net/assets/community/images/wgt/logo-white-s.svg?0.170.8697_1067"
          loading="lazy"
          alt=""
        />
        <div className="langs">
          <i className="fa fa-globe" />
          <a lang="en" hrefLang="en" href="?hl=en" title="English">
            EN
          </a>
          <a lang="es" hrefLang="es" href="?hl=es" title="Español">
            ES
          </a>
          <a lang="fr" hrefLang="fr" href="?hl=fr" title="Français">
            FR
          </a>
          <a lang="de" hrefLang="de" href="?hl=de" title="Deutsch">
            DE
          </a>
        </div>
      </div>
      <div className="links">
        <h4>WGT</h4>
        <a href="home/">Home</a>
        <a href="about.aspx">About Us</a>
        <a href="contact.aspx">Contact Us</a>
        <a
          href="https://mgmtcorp-topgolf.icims.com/jobs/search?searchLocation=12781-12789-San+Francisco"
          rel="noopener"
          target="_blank"
        >
          Careers
        </a>
        <a
          href="https://www.topgolfmedia.com/?utm_source=wgt&utm_medium=web&utm_campaign=advertise"
          rel="noopener"
          target="_blank"
        >
          Advertise
        </a>
      </div>
      <div className="links">
        <h4>GOLF</h4>
        <a href="golfnews/">Golf News</a>
        <a href="golf-tournaments/">Golf Tournaments</a>
        <a href="proshop/">Golf Equipment</a>
        <a href="courses/">Golf Courses</a>
        <a href="clubs/">Country Clubs</a>
      </div>
      <div className="links">
        <h4>HELP</h4>
        <a href="help/">Help/FAQ</a>
        <a href="code/">Redeem Code</a>
        <a href="terms/">Terms &amp; Conditions</a>
        <a href="privacy/">Privacy, Ad, &amp; Cookie Policies</a>
        <a
          className="ccpa"
          href="https://privacyportal.onetrust.com/webform/e35618a4-0a94-48f8-bb8e-00c8b0f8a3a2/8c305244-3603-49b1-ab59-e6885e8df7be"
          rel="noopener"
          target="_blank"
          title="CCPA Opt-Out"
        >
          Your Privacy Choices
        </a>
        <a
          className="ot-sdk-show-settings gdpr"
          aria-label="Privacy Settings"
          href="#footer"
        >
          Manage Cookie Preferences
        </a>
      </div>
      <div className="clear" />
    </div>
  </div>
  <small className="legal">
    <div className="m copyright">
      <b>©2023 World Golf Tour ™</b>
    </div>
    <div className="m links">
      <a href="home/?mobile=0">Home</a>
      <a href="https://m.wgt.com/help">Help</a>
      <a href="code/" title="Redeem Code">
        Redeem
      </a>
      <a
        href="https://mgmtcorp-topgolf.icims.com/jobs/search?searchLocation=12781-12789-San+Francisco"
        rel="noopener"
        target="_blank"
      >
        Careers
      </a>
      <nobr>
        <a href="https://m.wgt.com/terms" title="Terms & Conditions">
          Terms
        </a>
        <a
          href="https://m.wgt.com/privacy"
          title="Privacy, Ad, & Cookie Policies"
        >
          Privacy, Ad, &amp; Cookie Policies
        </a>
      </nobr>
      <a
        className="ccpa"
        href="https://privacyportal.onetrust.com/webform/e35618a4-0a94-48f8-bb8e-00c8b0f8a3a2/8c305244-3603-49b1-ab59-e6885e8df7be"
        rel="noopener"
        target="_blank"
        title="CCPA Opt-Out"
      >
        Your Privacy Choices
      </a>
      <a
        className="ot-sdk-show-settings gdpr"
        aria-label="Privacy Settings"
        href="#footer"
      >
        Manage Cookie Preferences
      </a>
    </div>
    <span>iPad and App Store are trademarks of Apple Inc.</span>
    <span>Android is a trademark of Google Inc.</span>
    <span>
      Amazon, Kindle, Fire and all related logos are trademarks of Amazon.com,
      Inc. or its affiliates.
    </span>
  </small>
</footer>

  )
}
