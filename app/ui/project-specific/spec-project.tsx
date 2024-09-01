import CommandText from '../command-text/command-text'
import Slider from '../slider'
import styles from './main.module.scss'
import { HiOutlineStar } from "react-icons/hi";

export default async function SpecProject({ projectId }: { projectId: string }) {

  const r = await new Promise((resolve, reject) => {  // artificial delay
    setTimeout(() => resolve(Infinity), 3000)
  })
  
  const project = {
    name: 'Direct Chat',
    description: 'Description about direct chat',
    features: [
      ['Fast', 'enough to communicate over the world!'],
      ['Secure', 'to not be worried about leaks'],
      ['Minimalist', 'to fit your style'],
    ],
    resume: 'Direct Chat to message people safely and robust',
    pictures: ['/direct-chat_01.png', '/direct-chat_01.png', '/direct-chat_01.png', '/direct-chat_01.png'],
  }
  
  return (
    <div className={`${styles.specpr}`}>
      <div className={`${styles.specpr_box_title_date}`}>
        <h1 className={`${styles.specpr_title}`}>{project.name}</h1>
        <span className={`${styles.specpr_date}`}><span className={`${styles.specpr_flc}`}>first line of code: </span>2024-07-17</span>
      </div>
      <div className={`${styles.specpr_imageBox}`}>
        <Slider className={styles.slider_my} images={project.pictures} />
      </div>
      <div className={`${styles.specpr_description}`}>
        <h3 className={`${styles.specpr_description_title}`}>Description</h3>
        <p className={`${styles.specpr_description_text}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem
          reiciendis accusantium. Saepe doloremque ratione asperiores debitis
          illo quia numquam, fuga eum aut rem error placeat magnam quod,
          recusandae consequatur ex accusamus commodi praesentium beatae
          voluptates provident totam aliquid reprehenderit qui. Recusandae esse
          nisi placeat accusamus error provident reiciendis ducimus?
        </p>
      </div>
      <div className={`${styles.specpr_features}`}>
        <h3 className={`${styles.specpr_features_title}`}>Features</h3>
        <ul className={`${styles.specpr_features_ul}`}>
          {project.features.map((feature) => (
            <li className={`${styles.specpr_features_li}`}>
              <span className={`${styles.specpr_features_label}`}>{feature[0]}</span> <span className={`${styles.specpr_features_value}`}>{feature[1]}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.specpr_resume}`}>
        <p className={`${styles.specpr_resume_text}`}>
          <HiOutlineStar className={`${styles.specpr_resume_icon}`} /> {project.resume}
        </p>
      </div>
      <div className={`${styles.specpr_goto}`}>
        <a href='https://google.com' className={`${styles.specpr_goto_btn} shim-carcass shim-hover animate an_fast`}>GO TO</a>
      </div>
    </div>
  )
}