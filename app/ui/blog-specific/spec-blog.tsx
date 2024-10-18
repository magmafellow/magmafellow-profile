import { getBlogById } from '@/app/lib/actions/blogs'
import Content from './content'
import styles from './main.module.scss'
import { getTagsByBlogId } from '@/app/lib/actions/blogs-tags'

export default async function SpecBlog({ blogId }: { blogId: string }) {
  // const blog = {
  //   id: 8001,
  //   title: 'How to preview Next.js application on phone?',
  //   bite: 'Did you once want to check your running Next.js application on phone? I did but it was not easy to find the solution. So far how create-react-app provides this out-of-the-box in Next.js You might struggle a lot before you know how to to do so. In this article I talk about this thing',
  //   content: markup,
  // }

  const blog = await getBlogById(Number(blogId))
  const blogTags = await getTagsByBlogId(blog.id)
  // console.log(blogTags)

  return (
    <div className={`${styles.blog}`}>
      <h1 className={`${styles.blog_title}`}>{blog.title}</h1>
      <p className={`${styles.blog_bite}`}>{blog.bite}</p>
      <div className={`${styles.blog_tags}`}>
        {blogTags.map((item, i) => <div key={i} className={`${styles.blog_tags_tag}`}>{item}</div>)}
      </div>
      <div className={`${styles.blog_hr}`}></div>
      <div className={`${styles.content}`}>
        <Content markup={blog.content} />
      </div>
    </div>
  )
}


// const markup = `
// <div class="blog">
//   <h2>Preview web app on mobile</h2>
//   <p>
//     Previewing web app on mobile is very convinient way to moderate your markup
//     on mobile-screen sizes of viewport. It is really it
//   </p>
//   <h3>Nextjs with it</h3>
//   <p>
//     When you run <span class="command">npm run dev</span> you are prompted to go
//     to <span class="link">http://localhost:3000</span>, but it would be great if
//     also you were prompted something like
//     <span class="link">http://199.0.0.256:3000</span>. Sadly it is not like that.
//   </p>
//   <h3>Checking your own numbers</h3>
//   <p>The solution is in fact that you can find them, these numbers!</p>
//   <ol class="instructions">
//     <li>get to terminal</li>
//     <li>enter there <span class="command">ifconfig</span></li>
//     <li>find your IP-4 like internet address (something like 199.0.0.256)</li>
//   </ol>
//   <div class="warning">
//     <span class="bold highlight">ifconfig</span> might differ on different OS. This command is valid for Linus/Mac OS
//   </div>
//   <p>So with that in bag we can go next.</p>
//   <p>Put this address into <span class="highlight">http://[address]:3000</span>. That is it!</p>
//   <h2>Congrats! 🎉</h2>
// </div>
// `