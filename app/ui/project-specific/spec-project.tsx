import Link from 'next/link'
import CommandText from '../command-text/command-text'
import Slider from '../slider'
import styles from './main.module.scss'
import { HiOutlineStar } from 'react-icons/hi'
import { getProjectById } from '@/app/lib/actions/projects'
import { notFound } from 'next/navigation'

export default async function SpecProject({
  projectId,
}: {
  projectId: string
}) {
  // const r = await new Promise((resolve, reject) => {  // artificial delay
  //   setTimeout(() => resolve(Infinity), 3000)
  // })

  // const project = {
  //   name: 'Direct Chat',
  //   description: 'Description about direct chat',
  //   features: [
  //     ['Fast', 'enough to communicate over the world!'],
  //     ['Secure', 'to not be worried about leaks'],
  //     ['Minimalist', 'to fit your style'],
  //   ],
  //   resume: 'Direct Chat to message people safely and robust',
  //   pictures: ['/direct-chat_01.png', '/direct-chat_01.png', '/direct-chat_01.png', '/direct-chat_01.png'],
  // }

  const project = await getProjectById(projectId)
  if (!project) {
    return notFound()
  }

  const features = JSON.parse(project.features)
  const pictures = JSON.parse(project.pictures)

  return (
    <div className={`${styles.specpr}`}>
      <div className={`${styles.specpr_box_title_date}`}>
        <h1 className={`${styles.specpr_title}`}>{project.name}</h1>
        <span className={`${styles.specpr_date}`}>
          <span className={`${styles.specpr_flc}`}>first line of code: </span>
          2024-07-17
        </span>
      </div>
      <div className={`${styles.specpr_imageBox}`}>
        <Slider className={styles.slider_my} images={pictures} />
      </div>
      <div className={`${styles.specpr_description}`}>
        <h3 className={`${styles.specpr_description_title}`}>Description</h3>
        <p className={`${styles.specpr_description_text}`}>
          {project.description}
        </p>
      </div>
      <div className={`${styles.specpr_features}`}>
        <h3 className={`${styles.specpr_features_title}`}>Features</h3>
        <ul className={`${styles.specpr_features_ul}`}>
          {features.map((feature: any, index: number) => (
            <li key={index} className={`${styles.specpr_features_li}`}>
              <span className={`${styles.specpr_features_label}`}>
                {feature[0]}
              </span>{' '}
              <span className={`${styles.specpr_features_value}`}>
                {feature[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.specpr_resume}`}>
        <HiOutlineStar className={`${styles.specpr_resume_icon}`} />
        <p className={`${styles.specpr_resume_text}`}>{project.resume}</p>
      </div>
      <div className={`${styles.specpr_goto}`}>
        <Link
          href="https://google.com"
          className={`${styles.specpr_goto_btn} shim-carcass shim-hover animate an_fast`}
        >
          GO TO
        </Link>
      </div>
    </div>
  )
}
