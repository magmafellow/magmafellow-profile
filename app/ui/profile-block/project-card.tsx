import Image from 'next/image'
import styles from './projects.module.scss'
import Link from 'next/link'
import { getAllTagsByProjectId } from '@/app/lib/actions/projects'

export default async function ProjectCard({
  id,
  name,
  description,
  features,
  pictures,
  resume
}: {
  id: number
  name: string
  description: string
  features: any
  pictures: any
  resume: string
}) {
  const tags = await getAllTagsByProjectId(id, 7)
  
  return (
    <div className={`${styles.projects_item}`}>
      <div className={`${styles.projects_imgBox}`}>
        <Image
          width={360}
          height={236}
          alt={`${name} project`}
          src={`/images/projects/${pictures[0]}`}
        />
      </div>
      <div className={`${styles.projects_infoBox}`}>
        <h3 className={`${styles.projects_title}`}>{name}</h3>
        <p className={`${styles.projects_description}`}>{description}</p>
        <div className={`${styles.projects_tags_and_exploreBox}`}>
          <div className={`${styles.projects_tags}`}>
            <div className={`${styles.projects_tags_inner}`}>
              {tags.map((value, i) => (
                <div key={i} className={`${styles.projects_tags_item}`}>{value.tags_table?.name}</div>
              ))}
            </div>
          </div>
          <div className={`${styles.projects_explore_and_timeBox}`}>
            <Link href={`/projects/${id}`} className={`${styles.projects_exploreBtn}`}>
              Explore
            </Link>
            <div className={`${styles.projects_date}`}>2024-08-17</div>
          </div>
        </div>
      </div>
    </div>
  )
}
