import Slider from '../slider'
import styles from './main.module.scss'
import { HiOutlineStar } from 'react-icons/hi'

export default async function SpecProjectSkeleton() {
  return (
    <div className={`${styles.specpr}`}>
      <div className={`${styles.specpr_box_title_date}`}>
        <h1
          className={`${styles.specpr_title} ${styles.specpr_title_skeleton} shim-carcass shim-effect animate`}
        ></h1>
        <span
          className={`${styles.specpr_date} ${styles.specpr_date_skeleton} shim-carcass shim-effect animate`}
        ></span>
      </div>
      <div
        className={`${styles.specpr_imageBox} ${styles.specpr_imageBox_skeleton}`}
      >
        <div>image loading...</div>
      </div>
      <div className={`${styles.specpr_description}`}>
        <h3
          className={`${styles.specpr_description_title} ${styles.specpr_description_title_skeleton} shim-carcass shim-effect animate`}
        ></h3>
        <p
          className={`${styles.specpr_description_text} ${styles.specpr_description_text_skeleton} shim-carcass shim-effect animate`}
        ></p>
      </div>
      <div className={`${styles.specpr_features}`}>
        <h3
          className={`${styles.specpr_features_title} ${styles.specpr_features_title_skeleton} shim-carcass shim-effect animate`}
        ></h3>
        <ul className={`${styles.specpr_features_ul}`}>
          {[1, 2, 3].map((feature, index) => (
            <li key={index}
              className={`${styles.specpr_features_li} ${styles.specpr_features_li_skeleton}`}
            >
              <span
                className={`${styles.specpr_features_label} ${styles.specpr_features_label_skeleton} shim-carcass shim-effect animate`}
              >
                &nbsp;
              </span>
              <span
                className={`${styles.specpr_features_value} ${styles.specpr_features_value_skeleton} shim-carcass shim-effect animate`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.specpr_resume}`}>
        <p
          className={`${styles.specpr_resume_text} ${styles.specpr_resume_text_skeleton} shim-carcass shim-effect animate an_fast`}
        >
          <HiOutlineStar className={`${styles.specpr_resume_icon}`} />
        </p>
      </div>
    </div>
  )
}
