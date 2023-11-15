import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
const DATA = [
  {
    data_code: "PH2",
    backgroundImage: "url('/course/PH2_home.jpg')",
    href: "#",
    class: "",
    title: "Pinehurst No. 2",
  },
  {
    data_code: "PEB",
    backgroundImage: "url('/course/PEB_home.jpg')",
    href: "#",
    class: "",
    title: "Pebble Beach",
  },
  {
    data_code: "TRP",
    backgroundImage: "url('/course/TRP_home.jpg')",
    href: "#",
    class: "",
    title: "Torrey Pines",
  },
  {
    data_code: "STA",
    backgroundImage: "url('/course/STA_home.jpg')",
    href: "#",
    class: "",
    title: "St Andrews",
  },
  {
    data_code: "BOBP3",
    backgroundImage: "url('/course/BOBP3_home.jpg')",
    href: "#",
    class: "",
    title: "Bandon Dunes",
  },
  {
    data_code: "OAK",
    backgroundImage: "url('/course/OAK_home.jpg')",
    href: "#",
    class: "",
    title: "Oakmont",
  },
  {
    data_code: "PGN",
    backgroundImage: "url('/course/PGN_home.jpg')",
    href: "#",
    class: "",
    title: "PGA National",
  },
  {
    data_code: "KIOC",
    backgroundImage: "url('/course/KIOC_home.jpg')",
    href: "#",
    class: "",
    title: "Kiawah Island",
  },
  {
    data_code: "WOL",
    backgroundImage: "url('/course/WOL_home.jpg')",
    href: "#",
    class: "",
    title: "Wolf Creek",
  },
  {
    data_code: "CHA",
    backgroundImage: "url('/course/CHA_home.jpg')",
    href: "#",
    class: "",
    title: "Chambers Bay",
  },
  {
    data_code: "BPB",
    backgroundImage: "url('/course/BPB_home.jpg')",
    href: "#",
    class: "",
    title: "Bethpage Black",
  },
  {
    data_code: "ERH",
    backgroundImage: "url('/course/ERH_home.jpg')",
    href: "#",
    class: "",
    title: "Erin Hills",
  },
  {
    data_code: "MER",
    backgroundImage: "url('/course/MER_home.jpg')",
    href: "#",
    class: "",
    title: "Merion",
  },
  {
    data_code: "ROY",
    backgroundImage: "url('/course/ROY_home.jpg')",
    href: "#",
    class: "",
    title: "Royal St. George's",
  },
  {
    data_code: "VAL",
    backgroundImage: "url('/course/VAL_home.jpg')",
    href: "#",
    class: "",
    title: "Valhalla",
  },
  {
    data_code: "CON",
    backgroundImage: "url('/course/CON_home.jpg')",
    href: "#",
    class: "",
    title: "Congressional",
  },
  {
    data_code: "OLY",
    backgroundImage: "url('/course/OLY_home.jpg')",
    href: "#",
    class: "",
    title: "The Olympic Club",
  },
  {
    data_code: "HAR",
    backgroundImage: "url('/course/HAR_home.jpg')",
    href: "#",
    class: "hide2",
    title: "Harbour Town",
  },
  {
    data_code: "EDG",
    backgroundImage: "url('/course/EDG_home.jpg')",
    href: "#",
    class: "hide2",
    title: "Edgewood Tahoe",
  },
  {
    data_code: "PH8",
    backgroundImage: "url('/course/PH8_home.jpg')",
    href: "#",
    class: "hide2 hide3 hide4 hide5 hide7",
    title: "Pinehurst No. 8",
  },
  {
    data_code: "CEL",
    backgroundImage: "url('/course/CEL_home.jpg')",
    href: "#",
    class: "",
    title: "Celtic Manor",
  },
  {
    data_code: "LCM",
    backgroundImage: "url('/course/LCM_home.jpg')",
    href: "#",
    class: "hide2 hide3 hide4 hide5 hide7",
    title: "Manele",
  },
  {
    data_code: "LEK",
    backgroundImage: "url('/course/LEK_home.jpg')",
    href: "#",
    class: "hide2 hide3 hide4 hide5 hide7",
    title: "Koele",
  },
  {
    data_code: "TG",
    backgroundImage: "url('/course/TG_home.jpg')",
    href: "#",
    class: "",
    title: "Topgolf",
  },
];
export default function Course() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="courses" className="anim">
      <div>
        <h2>WGT Golf Courses</h2>
        <div className="courses">
          {DATA.map((item, index) => {
            return (
              <div data-aos="zoom-in">
                <article
                  key={index}
                  data-code={item.data_code}
                  className={item.class}
                  style={{
                    backgroundImage: item.backgroundImage,
                  }}
                >
                  <h3>
                    <a href="#">{item.title}</a>
                  </h3>
                </article>
              </div>
            );
          })}
        </div>
      </div>
      <a className="scrolltap" href="#bottom" title="Scroll to bottom">
        <span>
          <FaAngleDown />
        </span>
      </a>
    </section>
  );
}
