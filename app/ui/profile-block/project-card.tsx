import Image from 'next/image'
import styles from './projects.module.scss'
import Link from 'next/link'

export default function ProjectCard({
  title,
  description,
  imagePath,
  tags,
  projectURL,
}: {
  title: string
  description: string
  imagePath: string
  tags: string[]
  projectURL: string
}) {
  return (
    <div className={`${styles.projects_item}`}>
      <div className={`${styles.projects_imgBox}`}>
        <Image
          width={289}
          height={200}
          alt={`${title} project`}
          src={`/${imagePath}`}
        />
      </div>
      <div className={`${styles.projects_infoBox}`}>
        <h3 className={`${styles.projects_title}`}>Design think</h3>
        <p className={`${styles.projects_description}`}>
          Direct Chat is a powerful messanger with uncommon philosophy of how
          you interact with it. In this app a thing around which everything
          revolves is a chat
        </p>
        <div className={`${styles.projects_tags_and_exploreBox}`}>
          <div className={`${styles.projects_tags}`}>
            <div className={`${styles.projects_tags_inner}`}>
              {tags.map((value, i) => (
                <div key={i} className={`${styles.projects_tags_item}`}>{value}</div>
              ))}
            </div>
          </div>
          <div className={`${styles.projects_explore_and_timeBox}`}>
            <Link href={`/${projectURL}`} className={`${styles.projects_exploreBtn}`}>
              Explore
            </Link>
            <div className={`${styles.projects_date}`}>2024-08-17</div>
          </div>
        </div>
      </div>
    </div>
  )
}
