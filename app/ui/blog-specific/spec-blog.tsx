import Content from './content'
import styles from './main.module.scss'

export default function SpecBlog({ blogId }: { blogId: string }) {
  const blog = {
    id: 8001,
    title: 'How to preview Next.js application on phone?',
    bite: 'Did you once want to check your running Next.js application on phone? I did but it was not easy to find the solution. So far how create-react-app provides this out-of-the-box in Next.js You might struggle a lot before you know how to to do so. In this article I talk about this thing',
    content: '<div class="blog"><h2 class="title">It is an Issue...</h2></div>',
  }

  return (
    <div className={`${styles.blog}`}>
      <h1 className={`${styles.blog_title}`}>{blog.title}</h1>
      <p className={`${styles.blog_bite}`}>{blog.bite}</p>
      <div className={`${styles.blog_tags}`}>
        <div className={`${styles.blog_tags_tag}`}>tailwind</div>
        <div className={`${styles.blog_tags_tag}`}>typescript</div>
        <div className={`${styles.blog_tags_tag}`}>grid</div>
      </div>
      <div className={`${styles.blog_hr}`}></div>
      <div className={`${styles.content}`}>
        <Content markup={blog.content} />
      </div>
    </div>
  )
}
