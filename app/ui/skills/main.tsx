import styles from './main.module.scss'
import { FaGears } from 'react-icons/fa6'
import { MdOutlineDesignServices } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";
import { HiServer } from "react-icons/hi2";

export default function Skills() {
  return (
    <>
      <h2 className={`${styles.skills_title}`}>Skills</h2>
      <p className={`${styles.skills_little}`}>What types of problem I solve on daily basis</p>
      <ul className={`${styles.skills}`}>
        <li className={`${styles.skills_li}`}>
          <div className={`${styles.skills_leftBox}`}>
            <FaGears />
          </div>
          <div className={`${styles.skills_rightBox}`}>
            <h3 className={`${styles.skills_rightBox_title}`}>
              Engineering structure
            </h3>
            <p className={`${styles.skills_rightBox_text}`}>
              Find out optimal database relations, stack of technologies and
              implementing it together.
            </p>
          </div>
        </li>
        <li className={`${styles.skills_li}`}>
          <div className={`${styles.skills_leftBox}`}>
            <MdOutlineDesignServices />
          </div>
          <div className={`${styles.skills_rightBox}`}>
            <h3 className={`${styles.skills_rightBox_title}`}>
              Design
            </h3>
            <p className={`${styles.skills_rightBox_text}`}>
              Seek new layouts and engaging combinations of elements.
            </p>
          </div>
        </li>
        <li className={`${styles.skills_li}`}>
          <div className={`${styles.skills_leftBox}`}>
            <FaDisplay />
          </div>
          <div className={`${styles.skills_rightBox}`}>
            <h3 className={`${styles.skills_rightBox_title}`}>
              Front-End
            </h3>
            <p className={`${styles.skills_rightBox_text}`}>
              Creating effective HTML and CSS, JS(TS) blocks (components) for UI.
            </p>
          </div>
        </li>
        <li className={`${styles.skills_li}`}>
          <div className={`${styles.skills_leftBox}`}>
            <HiServer />
          </div>
          <div className={`${styles.skills_rightBox}`}>
            <h3 className={`${styles.skills_rightBox_title}`}>
              Back-End
            </h3>
            <p className={`${styles.skills_rightBox_text}`}>
              Connect UI with inner logic of an app. (Handling DB queries, authentication and authorization)
            </p>
          </div>
        </li>
      </ul>
    </>
  )
}
