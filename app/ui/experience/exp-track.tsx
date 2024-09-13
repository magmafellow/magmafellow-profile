import styles from './exp-track.module.scss'
import { MdOutlineCss } from 'react-icons/md'
import { FaPython } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { IoLogoReact } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandDjango } from 'react-icons/tb'
import { RiNextjsFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaPencil } from 'react-icons/fa6'
import { SiDrizzle } from 'react-icons/si'
import TrackItem from './track-item'

export default function ExpTrack() {
  return (
    <div className={`${styles.track}`}>
      {/* item 1 */}
      <div className={`${styles.track_item}`}>
        <div className={`${styles.track_item_time}`}>2021-2022</div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <FaPython className={`${styles.python}`} />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>Python</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          It is my first step into dev. My initial point. Basic principles of
          programming I learned at this time.
        </div>
        <div className={`${styles.track_item_hr}`}></div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <FaHtml5 className={`${styles.html}`} />
            <MdOutlineCss />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>HTML</div>
            <div>CSS</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          Here I acquire knowledge about building UI blocks in tandem HTML+CSS.
        </div>
        <div className={`${styles.track_item_hr}`}></div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <TbBrandDjango className={`${styles.django}`} />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>Django</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          Front-end without back-end is just static things. For this reason I
          started learning Django. So I did my first full-stack apps.
        </div>
        <div className={`${styles.track_item_hr}`}></div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <FaJsSquare className={`${styles.javascript}`} />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>JavaScript</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          I explore the great power of programming dynamic web UIs with
          JavaScript.
        </div>
      </div>

      <div className={`${styles.track_item}`}>
        <div className={`${styles.track_item_time}`}>2022-2023</div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <IoLogoReact />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>React</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          It is time to React... I respect modular concept of programming. React
          gracefuly deals with it. Creating components and combine them is
          fruitful.
        </div>
        <div className={`${styles.track_item_hr}`}></div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <RiTailwindCssFill />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>Tailwind</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          It is very convenient tool for styling your component and plane HTML.
          After using this I do not imagine my development flow without it.
        </div>
        <div className={`${styles.track_item_hr}`}></div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <BiLogoPostgresql className={`${styles.postgresql}`} />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>Postgresql</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          One of the most trusted and robust Database Manager Systems. I respect Postgresql.
        </div>
        <div className={`${styles.track_item_hr}`}></div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <BiLogoTypescript />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>TypeScript</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          It is time to power JavaScript. Sometimes it is confused to navigate
          in code. TypeScript does the best to keep you safe and happy when
          coding.
        </div>
      </div>

      <div className={`${styles.track_item}`}>
        <div className={`${styles.track_item_time}`}>2023-2024</div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <RiNextjsFill className={`${styles.nextjs}`} />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>NextJS</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          My darling. NextJS gives me everything I need to build worthful and
          decent full-stack applications. It offers effectivly what a developer might request from a framework. Constantly evolving
        </div>
        <div className={`${styles.track_item_hr}`}></div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <SiDrizzle className={`${styles.drizzle}`} />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>Drizzle</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          Fast, intuitive and fruitful ORM with TypeScript support.
        </div>
      </div>

      <div className={`${styles.track_item}`}>
        <div className={`${styles.track_item_time}`}>Nowadays</div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <FaPencil className={`${styles.pencil}`} />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>Engineering</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          For now I am trying to combine all present skills and technologies for
          building fast, robust and engaging projects. Meantime I learn
          something new to evolve myself. Check my GitHub, Blog and other social
          platforms to be up-to-date with me.
        </div>
      </div>

      {/* <TrackItem icons={[<FaPython />]} names={['Python']} year="2020-2021">
        It is my first step into dev. My initial point. Basic principles of
        programming I learned at this time.
      </TrackItem> */}
      {/* item 2 */}
      {/* <TrackItem
        icons={[<FaHtml5 />, <MdOutlineCss />]}
        names={['HTML', 'CSS']}
        year="2021-2022"
      >
        Here I acquire knowledge about building UI blocks in tandem HTML+CSS.
      </TrackItem> */}
      {/* <TrackItem icons={[<FaJsSquare />]} names={['JS']} year="2022-2023">
        I explore the great power of dynamic (responsive) programming Web UI
        with JavaScript.
      </TrackItem> */}
    </div>
  )
}
