import Link from 'next/link'
import CommandText from '../command-text/command-text'
import styles from './main.module.scss'
import { FaCirclePlus } from 'react-icons/fa6'
import { BsCalendarDate } from 'react-icons/bs'

export default async function BlogBlock() {
  return (
    <div className={`${styles.blog}`}>
      <CommandText id="get-blog" path="#/home/magmafellow" command="get-blog" />
      <div className={`${styles.blog_box_title_add}`}>
        <h1 className={`${styles.blog_page_title}`}>Magmafellow's Blog</h1>
        <Link href="/blog/add">
          <FaCirclePlus className={`${styles.blog_addBtn}`} />
        </Link>
      </div>
      <div className={`${styles.blogs}`}>
        <div className={`${styles.blog_item}`}>
          <h2 className={`${styles.blog_item_title}`}>
            How to launch Next.js on phone
          </h2>
          <p className={`${styles.blog_item_bite}`}>
            Did you once want to check your running Next.js application on
            phone? I did but it was not easy to find the solution. So far how
            create-react-app provides this out-of-the-box in Next.js You might
            struggle a lot before you know how to to do so. In this article I talk about this thing
          </p>
          <div className={`${styles.delimiter} ${styles.mb_16px} ${styles.bg_dark}`}></div>
          <div className={`${styles.blog_item_box_date_tags_btn}`}>
            <div className={`${styles.blog_item_box_date}`}>
              <BsCalendarDate />
              <div className={`${styles.blog_item_box_date_date}`}>
                17 Fri August
              </div>
            </div>
            <div className={`${styles.blog_item_box_tags}`}>
              <div className={`${styles.blog_item_box_tags_tag}`}>next.js</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>tricks</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>mobile</div>
            </div>
            <div className={`${styles.blog_item_box_btn}`}>
              <button className={`${styles.blog_item_box_btn_btn}`}>
                Check out
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.blog_item}`}>
          <h2 className={`${styles.blog_item_title}`}>
            Why Typescript has filled the development
          </h2>
          <p className={`${styles.blog_item_bite}`}>
            However you once want to check your running Next.js application on
            phone? I did but it was not easy to find the solution. So far how
            create-react-app provides this out-of-the-box in Next.js You might
            struggle a lot before you know how to to do so. In this article I talk about this thing
          </p>
          <div className={`${styles.delimiter} ${styles.mb_16px} ${styles.bg_dark}`}></div>
          <div className={`${styles.blog_item_box_date_tags_btn}`}>
            <div className={`${styles.blog_item_box_date}`}>
              <BsCalendarDate />
              <div className={`${styles.blog_item_box_date_date}`}>
                17 Fri August
              </div>
            </div>
            <div className={`${styles.blog_item_box_tags}`}>
              <div className={`${styles.blog_item_box_tags_tag}`}>next.js</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>tricks</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>web</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>typescirpt</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>css</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>animations</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>rollup</div>
            </div>
            <div className={`${styles.blog_item_box_btn}`}>
              <button className={`${styles.blog_item_box_btn_btn}`}>
                Check out
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.blog_item}`}>
          <h2 className={`${styles.blog_item_title}`}>
            The Reason to wonder to migrate to Scss from Tailwindcss
          </h2>
          <p className={`${styles.blog_item_bite}`}>
            One day I once want to check your running Next.js application on
            phone? I did but it was not easy to find the solution. So far how
            create-react-app provides this out-of-the-box in Next.js You might
            struggle a lot before you know how to to do so. In this article I talk about this thing
          </p>
          <div className={`${styles.delimiter} ${styles.mb_16px} ${styles.bg_dark}`}></div>
          <div className={`${styles.blog_item_box_date_tags_btn}`}>
            <div className={`${styles.blog_item_box_date}`}>
              <BsCalendarDate />
              <div className={`${styles.blog_item_box_date_date}`}>
                17 Fri August
              </div>
            </div>
            <div className={`${styles.blog_item_box_tags}`}>
              <div className={`${styles.blog_item_box_tags_tag}`}>next.js</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>tricks</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>web</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>typescirpt</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>css</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>animations</div>
              <div className={`${styles.blog_item_box_tags_tag}`}>rollup</div>
            </div>
            <div className={`${styles.blog_item_box_btn}`}>
              <button className={`${styles.blog_item_box_btn_btn}`}>
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
