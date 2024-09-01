import CommandText from '../command-text/command-text'
import Slider from '../slider'
import styles from './main.module.scss'
import { HiOutlineStar } from 'react-icons/hi'
import SpecProject from './spec-project'
import { Suspense } from 'react'
import SpecProjectSkeleton from './spec-project-skeleton'

export default function ProjectSpecific({ projectId }: { projectId: string }) {
  return (
    <div className={`${styles.page}`}>
      <CommandText
        id={`main`}
        path="#/home/magmafellow"
        command={`get-project`}
      />
      <Suspense fallback={<SpecProjectSkeleton />}>
        <SpecProject projectId={projectId} />
      </Suspense>
    </div>
  )
}
