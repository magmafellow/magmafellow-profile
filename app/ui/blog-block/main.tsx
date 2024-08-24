import Link from 'next/link'
import CommandText from '../command-text/command-text'
import styles from './main.module.scss'
import { FaCirclePlus } from 'react-icons/fa6'
import { Suspense } from 'react'
import BlogItemWrapper from './blog-item-wrapper'
import BlogItemWrapperSkeleton from './blog-item-wrapper-skeleton'
import { findHighestIdFromBlogs } from '@/app/lib/actions/blogs'


export default async function BlogBlock() {
  return (
    <div className={`${styles.blog}`}>
      <CommandText id="get-blog" path="#/home/magmafellow" command="get-blog" />
      <div className={`${styles.blog_box_title_add}`}>
        <h1 className={`${styles.blog_page_title}`}>Magmafellow&apos;s Blog</h1>
        <Link href="/blog/add">
          <FaCirclePlus className={`${styles.blog_addBtn}`} />
        </Link>
      </div>
      <div className={`${styles.blogs}`}>
        
        <Suspense fallback={<BlogItemWrapperSkeleton limit={3} />}>
          <BlogItemWrapper limit={99} />
        </Suspense>

      </div>
    </div>
  )
}
