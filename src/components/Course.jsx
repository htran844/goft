import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
const DATA = [
  {
    data_code: "PH2",
    backgroundImage: "url('../../public/course/PH2_home.jpg')",
    href: "#",
    class: "",
    title: "Pinehurst No. 2",
  },
  {
    data_code: "PEB",
    backgroundImage: "url('../../public/course/PEB_home.jpg')",
    href: "#",
    class: "",
    title: "Pebble Beach",
  },
  {
    data_code: "TRP",
    backgroundImage: "url('../../public/course/TRP_home.jpg')",
    href: "#",
    class: "",
    title: "Torrey Pines",
  },
  {
    data_code: "STA",
    backgroundImage: "url('../../public/course/STA_home.jpg')",
    href: "#",
    class: "",
    title: "St Andrews",
  },
  {
    data_code: "BOBP3",
    backgroundImage: "url('../../public/course/BOBP3_home.jpg')",
    href: "#",
    class: "",
    title: "Bandon Dunes",
  },
  {
    data_code: "OAK",
    backgroundImage: "url('../../public/course/OAK_home.jpg')",
    href: "#",
    class: "",
    title: "Oakmont",
  },
  {
    data_code: "PGN",
    backgroundImage: "url('../../public/course/PGN_home.jpg')",
    href: "#",
    class: "",
    title: "PGA National",
  },
  {
    data_code: "KIOC",
    backgroundImage: "url('../../public/course/KIOC_home.jpg')",
    href: "#",
    class: "",
    title: "Kiawah Island",
  },
  {
    data_code: "WOL",
    backgroundImage: "url('../../public/course/WOL_home.jpg')",
    href: "#",
    class: "",
    title: "Wolf Creek",
  },
  {
    data_code: "CHA",
    backgroundImage: "url('../../public/course/CHA_home.jpg')",
    href: "#",
    class: "",
    title: "Chambers Bay",
  },
  {
    data_code: "BPB",
    backgroundImage: "url('../../public/course/BPB_home.jpg')",
    href: "#",
    class: "",
    title: "Bethpage Black",
  },
  {
    data_code: "ERH",
    backgroundImage: "url('../../public/course/ERH_home.jpg')",
    href: "#",
    class: "",
    title: "Erin Hills",
  },
  {
    data_code: "MER",
    backgroundImage: "url('../../public/course/MER_home.jpg')",
    href: "#",
    class: "",
    title: "Merion",
  },
  {
    data_code: "ROY",
    backgroundImage: "url('../../public/course/ROY_home.jpg')",
    href: "#",
    class: "",
    title: "Royal St. George's",
  },
  {
    data_code: "VAL",
    backgroundImage: "url('../../public/course/VAL_home.jpg')",
    href: "#",
    class: "",
    title: "Valhalla",
  },
  {
    data_code: "CON",
    backgroundImage: "url('../../public/course/CON_home.jpg')",
    href: "#",
    class: "",
    title: "Congressional",
  },
  {
    data_code: "OLY",
    backgroundImage: "url('../../public/course/OLY_home.jpg')",
    href: "#",
    class: "",
    title: "The Olympic Club",
  },
  {
    data_code: "HAR",
    backgroundImage: "url('../../public/course/HAR_home.jpg')",
    href: "#",
    class: "hide2",
    title: "Harbour Town",
  },
  {
    data_code: "EDG",
    backgroundImage: "url('../../public/course/EDG_home.jpg')",
    href: "#",
    class: "hide2",
    title: "Edgewood Tahoe",
  },
  {
    data_code: "PH8",
    backgroundImage: "url('../../public/course/PH8_home.jpg')",
    href: "#",
    class: "hide2 hide3 hide4 hide5 hide7",
    title: "Pinehurst No. 8",
  },
  {
    data_code: "CEL",
    backgroundImage: "url('../../public/course/CEL_home.jpg')",
    href: "#",
    class: "",
    title: "Celtic Manor",
  },
  {
    data_code: "LCM",
    backgroundImage: "url('../../public/course/LCM_home.jpg')",
    href: "#",
    class: "hide2 hide3 hide4 hide5 hide7",
    title: "Manele",
  },
  {
    data_code: "LEK",
    backgroundImage: "url('../../public/course/LEK_home.jpg')",
    href: "#",
    class: "hide2 hide3 hide4 hide5 hide7",
    title: "Koele",
  },
  {
    data_code: "TG",
    backgroundImage: "url('../../public/course/TG_home.jpg')",
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
