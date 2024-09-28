import styles from './main.module.scss'

import CommandText from '../command-text/command-text'
import Image from 'next/image'
import Link from 'next/link'
import Projects from './projects'
import Skills from '../skills/main'
import Experience from '../experience/main'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaDownload } from 'react-icons/fa6'
import Contact from '../skills2/main'

export default async function ProfileBlock() {
  return (
    <div className={`${styles.profile}`}>
      <CommandText id="whoami" path="#/home/magmafellow" command="whoami" />
      <div className={`${styles.profile_me}`}>
        <h1 className={`${styles.profile_me_title}`}>
          Full-stack web Engineer
        </h1>
        <p className={`${styles.profile_me_info} ${styles.p_limited}`}>
          Hello! I am magmafellow. I am a full-stack developer. I enjoy creating
          and designing. My focus is on{' '}
          <span className={`${styles.profile_me_em1} font-bold`}>Next.js</span>{' '}
          but upon web in general.
        </p>
        <p className={`${styles.profile_me_info} ${styles.p_limited}`}>
          I am open to{' '}
          <span className={`${styles.profile_me_em1}`}>job opportunities</span>{' '}
          where I <span className={`${styles.profile_me_em2}`}>contribute</span>
          , <span className={`${styles.profile_me_em2}`}>learn</span> and{' '}
          <span className={`${styles.profile_me_em2}`}>grow</span>. If you have
          something that matches my skills and experience do not hesitate to
          contact me.
        </p>
        <div className={styles.download_box}>
          <Link className={`${styles.download_box_link} ${styles.download_box_contact}`} href="#contact">
            Contact
            <FaArrowRightLong />
          </Link>
          <Link className={`${styles.download_box_link} ${styles.download_box_resume}`} href="/assets/resume.pdf">
            Get CV
            <FaDownload />
          </Link>
        </div>
      </div>
      <CommandText
        id="whatareprojects"
        path="#/home/magmafellow"
        command="whatareprojects"
      />
      <div className={`${styles.profile_projects}`}>
        <h2 className={`${styles.profile_projects_title}`}>Projects</h2>
        <p className={`${styles.profile_projects_little} ${styles.p_limited}`}>
          Explore my ideas. I have worked on 18+ ones.
        </p>
      </div>
      <Projects />
      <CommandText
        id="skills"
        path="#/home/magmafellow"
        command="whatareskills"
      />
      <Skills />
      <CommandText id="exp" path="#/home/magmafellow" command="experience" />
      <Experience />
      <CommandText id="contact" path="#/home/magmafellow" command="contact" />
      <Contact />
    </div>
  )
}
