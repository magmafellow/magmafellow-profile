import styles from './exp-track.module.scss'
import { BiLogoTypescript } from 'react-icons/bi'
import { MdOutlineCss } from "react-icons/md";


export default function ExpTrack() {
  return (
    <div className={`${styles.track}`}>
      <div className={`${styles.track_item}`}>
        <div className={`${styles.track_item_time}`}>2020-2021</div>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <BiLogoTypescript />
            <BiLogoTypescript />
            <MdOutlineCss />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>TypeScript</div>
            <div>TypeScript</div>
            <div>CSS</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          Deep development
        </div>
      </div>
      <div className={`${styles.track_item}`}>
        <div className={`${styles.track_item_tech}`}>
          <div className={`${styles.track_item_tech_icons}`}>
            <MdOutlineCss />
          </div>
          <div className={`${styles.track_item_tech_names}`}>
            <div>TypeScript</div>
          </div>
        </div>
        <div className={`${styles.track_item_content}`}>
          Deep development
        </div>
      </div>
    </div>
  )
}
