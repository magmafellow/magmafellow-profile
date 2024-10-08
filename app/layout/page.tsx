import Image from 'next/image'
import styles from './page.module.scss'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { IoStatsChart } from 'react-icons/io5'
import { truncatePhrase } from '../lib/utils'
import { inconsolata } from '../ui/fonts/inconsolata'
import { Inter } from 'next/font/google'
import CommandText from '@/app/ui/command-text/command-text'
import NavString from '../ui/nav-string/nav-string'
import { Suspense } from 'react'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['cyrillic', 'latin'],
})

export default function Page() {
  return (
    <div className={`${styles.outer_container} ${inter.className}`}>
      <NavString />

      <div className={`${styles.grid} min-h-[500px]`}>
        <div className={`${styles.stats}`}>
          <div className={`${styles.stats_number_box}`}>
            <div className={`${styles.stats_number_box_item}`}>
              <IoStatsChart />
            </div>
            <div className={`${styles.stats_number_box_item}`}>
              <span className={`${styles.stats_value}`}>18</span>
              <span className={`${styles.stats_label}`}>Projects</span>
            </div>
            <div className={`${styles.stats_number_box_item}`}>
              <span className={`${styles.stats_value}`}>7</span>
              <span className={`${styles.stats_label}`}>Blogs</span>
            </div>
            <div className={`${styles.stats_number_box_item}`}>
              <span className={`${styles.stats_value}`}>3</span>
              <span className={`${styles.stats_label}`}>times abroad :3</span>
            </div>
          </div>
          <div className={`${styles.delimiter} ${styles.mb_16px}`}></div>
          <div className={`${styles.latest_blogs}`}>
            <h2 className={`${styles.latest_blogs_title}`}>Latest blogs</h2>
            <div className={`${styles.latest_blogs_box}`}>
              <div className={`${styles.latest_blogs_box_item}`}>
                <h3 className={`${styles.latest_blogs_box_item_title}`}>
                  {truncatePhrase("Css variable's concept", 23)}
                </h3>
                <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
                  <span>15</span>
                  <span>min</span>
                </div>
              </div>
              <div className={`${styles.latest_blogs_box_item}`}>
                <h3 className={`${styles.latest_blogs_box_item_title}`}>
                  {truncatePhrase('New way to pass off Youtube block', 23)}
                </h3>
                <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
                  <span>5</span>
                  <span>min</span>
                </div>
              </div>
              <div className={`${styles.latest_blogs_box_item}`}>
                <h3 className={`${styles.latest_blogs_box_item_title}`}>
                  {truncatePhrase('Flexbox css', 23)}
                </h3>
                <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
                  <span>7</span>
                  <span>min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.blogpost_tags}`}>
          <h2 className={`${styles.blogpost_tags_title}`}>Blogpost tags</h2>
          <div className={`${styles.blogpost_tags_box}`}>
            <div className={`${styles.blogpost_tags_item}`}>
              <span className={`${styles.blogpost_tags_box_label}`}>
                typescript
              </span>
              <span className={`${styles.blogpost_tags_box_value}`}>88</span>
            </div>
            <div className={`${styles.blogpost_tags_item}`}>
              <span className={`${styles.blogpost_tags_box_label}`}>css</span>
              <span className={`${styles.blogpost_tags_box_value}`}>17</span>
            </div>
            <div className={`${styles.blogpost_tags_item}`}>
              <span className={`${styles.blogpost_tags_box_label}`}>
                css grid
              </span>
              <span className={`${styles.blogpost_tags_box_value}`}>10</span>
            </div>
          </div>
        </div>
        <div className={`${styles.profile}`}>
          <CommandText path="#/home/magmafellow" command="whoami" />
          <div className={`${styles.profile_me}`}>
            <h1 className={`${styles.profile_me_title}`}>
              Full-stack web Engineer
            </h1>
            <p className={`${styles.profile_me_info} ${styles.p_limited}`}>
              Hello! I am magmafellow. I am a full-stack developer. I enjoy
              creating and designing. My focus is on{' '}
              <span className={`${styles.profile_me_em1} font-bold`}>
                Next.js
              </span>{' '}
              but upon web in general.
            </p>
            <p className={`${styles.profile_me_info} ${styles.p_limited}`}>
              I am open to{' '}
              <span className={`${styles.profile_me_em1}`}>
                job opportunities
              </span>{' '}
              where I{' '}
              <span className={`${styles.profile_me_em2}`}>contribute</span>,{' '}
              <span className={`${styles.profile_me_em2}`}>learn</span> and{' '}
              <span className={`${styles.profile_me_em2}`}>grow</span>. If you
              have something that matches my skills and experience do not
              hesitate to contact me.
            </p>
          </div>
          <CommandText path="#/home/magmafellow" command="whatareprojects" />
          <div className={`${styles.profile_projects}`}>
            <h2 className={`${styles.profile_projects_title}`}>Projects</h2>
            <p
              className={`${styles.profile_projects_little} ${styles.p_limited}`}
            >
              Explore my ideas. I have worked on 18+ ones.
            </p>
            <div className={`${styles.projects}`}>
              <div className={`${styles.projects_item}`}>
                <div className={`${styles.projects_imgBox}`}>
                  <Image
                    width={289}
                    height={200}
                    alt='"design-think" project'
                    src="/design-think.png"
                  />
                </div>
                <div className={`${styles.projects_infoBox}`}>
                  <h3 className={`${styles.projects_title}`}>Design think</h3>
                  <p className={`${styles.projects_description}`}>
                    Direct Chat is a powerful messanger with uncommon philosophy
                    of how you interact with it. In this app a thing around
                    which everything revolves is a chat
                  </p>
                  <div className={`${styles.projects_tags_and_exploreBox}`}>
                    <div className={`${styles.projects_tags}`}>
                      <div className={`${styles.projects_tags_inner}`}>
                        <div className={`${styles.projects_tags_item}`}>
                          typescript
                        </div>
                        <div className={`${styles.projects_tags_item}`}>
                          html
                        </div>
                        <div className={`${styles.projects_tags_item}`}>
                          auth
                        </div>
                        <div className={`${styles.projects_tags_item}`}>
                          css
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.projects_explore_and_timeBox}`}>
                      <Link
                        href="/"
                        className={`${styles.projects_exploreBtn}`}
                      >
                        Explore
                      </Link>
                      <div className={`${styles.projects_date}`}>
                        2024-08-17
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.projects_item}`}>
                <div className={`${styles.projects_imgBox}`}>
                  <Image
                    width={289}
                    height={200}
                    alt='"direct chat" project'
                    src="/direct-chat.png"
                  />
                </div>
                <div className={`${styles.projects_infoBox}`}>
                  <h3 className={`${styles.projects_title}`}>Direct Chat</h3>
                  <p className={`${styles.projects_description}`}>
                    Direct Chat is a powerful messanger with uncommon philosophy
                    of how you interact with it. In this app a thing around
                    which everything revolves is a chat
                  </p>
                  <div className={`${styles.projects_tags_and_exploreBox}`}>
                    <div className={`${styles.projects_tags}`}>
                      <div className={`${styles.projects_tags_inner}`}>
                        <div className={`${styles.projects_tags_item}`}>
                          typescript
                        </div>
                        <div className={`${styles.projects_tags_item}`}>
                          html
                        </div>
                        <div className={`${styles.projects_tags_item}`}>
                          auth
                        </div>
                        <div className={`${styles.projects_tags_item}`}>
                          css
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.projects_explore_and_timeBox}`}>
                      <Link
                        href="/"
                        className={`${styles.projects_exploreBtn}`}
                      >
                        Explore
                      </Link>
                      <div className={`${styles.projects_date}`}>
                        2024-08-17
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.projects_item}`}>
                <div className={`${styles.projects_imgBox}`}>
                  <Image
                    width={361}
                    height={236}
                    alt='"explore" project'
                    src="/explore.png"
                  />
                </div>
                <div className={`${styles.projects_infoBox}`}>
                  <h3 className={`${styles.projects_title}`}>Explore Layout</h3>
                  <p className={`${styles.projects_description}`}>
                    Direct Chat is a powerful messanger with uncommon philosophy
                    of how you interact with it. In this app a thing around
                    which everything revolves is a chat
                  </p>
                  <div className={`${styles.projects_tags_and_exploreBox}`}>
                    <div className={`${styles.projects_tags}`}>
                      <div className={`${styles.projects_tags_inner}`}>
                        <div className={`${styles.projects_tags_item}`}>
                          typescript
                        </div>
                        <div className={`${styles.projects_tags_item}`}>
                          html
                        </div>
                        <div className={`${styles.projects_tags_item}`}>
                          auth
                        </div>
                        <div className={`${styles.projects_tags_item}`}>
                          css
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.projects_explore_and_timeBox}`}>
                      <Link
                        href="/"
                        className={`${styles.projects_exploreBtn}`}
                      >
                        Explore
                      </Link>
                      <div className={`${styles.projects_date}`}>
                        2024-08-17
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div
            className={`${styles.info_card}`}
          >
            <div className={`${styles.info_card__img_box}`}>
              <Image
                width={58}
                height={58}
                alt="profile image"
                src="/carrot.jpg"
              ></Image>
              <span>@magmafellow</span>
            </div>
            <ul className={`${styles.media_list}`}>
              <li className={`${styles.media_li}`}>
                <Link
                  href="https://t.me/polrekost"
                  className={`${styles.media_link}`}
                >
                  <FaTelegramPlane className={`${styles.media_img}`} />
                  <span className={`${styles.media_link_value}`}>
                    polrekost
                  </span>
                </Link>
              </li>
              <li className={`${styles.media_li}`}>
                <Link
                  href="mailto:magmafellow@gmail.com"
                  className={`${styles.media_link}`}
                >
                  <IoMdMail className={`${styles.media_img}`} />
                  <span className={`${styles.media_link_value}`}>
                    magmafellow@gmail.com
                  </span>
                </Link>
              </li>
              <li className={`${styles.media_li}`}>
                <Link
                  href="https://github.com/magmafellow"
                  className={`${styles.media_link}`}
                >
                  <FaGithub className={`${styles.media_img}`} />
                  <span className={`${styles.media_link_value}`}>
                    github.com/magmafellow
                  </span>
                </Link>
              </li>
            </ul>
            <div className={`${styles.delimiter} ${styles.mb_10px}`}></div>
            <div className={`${styles.bio_box}`}>
              <h2 className={`${styles.bio_box_title}`}>Bio</h2>
              <p className={`${styles.bio_box_text}`}>
                In IRL they call me alex. age of 19. I reside in Moscow, Russia.
                Enjoy coding and software engineering
              </p>
            </div>
            <div className={`${styles.delimiter} ${styles.mb_10px}`}></div>
            <div className={`${styles.language}`}>
              <ul className={`${styles.language_list}`}>
                <li className={`${styles.language_li}`}>
                  <span className={`${styles.language_label}`}>en</span>
                  <span className={`${styles.language_delim}`}>-</span>
                  <span className={`${styles.language_value}`}>c2</span>
                </li>
                <li className={`${styles.language_li}`}>
                  <span className={`${styles.language_label}`}>ru</span>
                  <span className={`${styles.language_delim}`}>-</span>
                  <span className={`${styles.language_value}`}>fluent</span>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}
