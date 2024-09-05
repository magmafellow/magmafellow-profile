import CommandText from '../command-text/command-text'
import styles from './main.module.scss'
import { Suspense } from 'react'
import SpecBlog from './spec-blog'

export default function BlogSpecific({ blogId }: { blogId: string }) {
  return (
    <div className={`${styles.page}`}>
      <CommandText
        id={`main`}
        path="#/home/magmafellow"
        command={`get-blogpost`}
      />
      {/* <Suspense fallback={<SpecProjectSkeleton />}> */}
        <SpecBlog blogId={blogId} />
      {/* </Suspense> */}
    </div>
  )
}
