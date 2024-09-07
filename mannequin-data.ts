import { v4 } from 'uuid'
import type {
  InsertBlog,
  InsertBlogTag,
  InsertProject,
  InsertProjectTag,
  InsertTag,
  InsertUser,
} from './schema'

export const projects: Array<InsertProject> = [
  {
    id: 500,
    name: 'Direct Chat',
    description:
      'A messanger. Which has minimalist design that you do not get bored of. Security and Speed were our objectives during develepment process. Direct Chat uses non-common approach to how you use messager - you do not have contacts, - you have only secure chats.',
    features: JSON.stringify([
      ['Security', 'that you will be content to use'],
      [
        'Minimalist:',
        'This messanger has an elegant design supporting you focus on the main',
      ],
      ['Fast:', 'Extremely fast interactions with UI'],
    ]),
    pictures: JSON.stringify([
      'direct-chat-01.png',
      'direct-chat-02.png',
      'direct-chat-03.png',
      'direct-chat-04.png',
      'direct-chat-05.png',
    ]),
    resume:
      'If you wanted to use something new in the world of messangers but still having security and speed - Choose Direct Chat',
  },
  {
    id: 501,
    name: 'Explore Nature',
    description: 'Showcase for layout. Practising HTML, CSS, JS',
    features: JSON.stringify([]),
    pictures: JSON.stringify(['explore-nature-01.png']),
    resume:
      'Static website. In which I try new and already known techniques to gain layout skills',
  },
  {
    id: 502,
    name: 'Design Think',
    description: 'Showcase for layout. Practising HTML, CSS, JS',
    features: JSON.stringify([
      ['Layouting:', 'Advanced HTML structure and css tricks'],
    ]),
    pictures: JSON.stringify(['design-think-01.png']),
    resume:
      'Static website. In which I try new and already known techniques to gain layout skills',
  },
  {
    id: 503,
    name: 'Tomato Focus',
    description:
      'A pomodoro-based app to improve productivity and focus. This uses the technique known as `Pomodoro`. Special design supports to keep you in focus. Only needed components included. Graceful sounds will let you know about changing phases.',
    features: JSON.stringify([
      ['Timing:', 'This app provides way to work with time'],
      [
        'Sounds:',
        'While working with app You will get notified about current state',
      ],
    ]),
    pictures: JSON.stringify([
      'tomato-focus-01.png',
      'tomato-focus-02.png',
      'tomato-focus-03.png',
      'tomato-focus-04.png',
    ]),
    resume:
      'Tomato Focus - App that provides functionality based on Pomodoro-Technique that helps keep you in clear, active state',
  },
]

export const tags: Array<InsertTag> = [
  {
    id: 1,
    name: 'javascript', // 1
  },
  {
    id: 2,
    name: 'css', // 2
  },
  {
    id: 3,
    name: 'advanced css', // 3
  },
  {
    id: 4,
    name: 'css grid', // 4
  },
  {
    id: 5,
    name: 'animations', // 5
  },
  {
    id: 6,
    name: 'typescript', // 6
    description:
      'Typescript is a superset of JavaScript. This thing provides types to your code that helps to create more robust code base',
  },
  {
    id: 7,
    name: 'performance',
    description: 'Performance of your apps',
  },
]

export const projectsTags: Array<InsertProjectTag> = [
  {
    id: 70,
    project_id: 500,
    tag_id: 1,
  },
  {
    id: 71,
    project_id: 500,
    tag_id: 2,
  },
  {
    id: 72,
    project_id: 500,
    tag_id: 6,
  },

  {
    id: 73,
    project_id: 501,
    tag_id: 2,
  },

  {
    id: 74,
    project_id: 502,
    tag_id: 2,
  },
]

export const users: InsertUser[] = [
  {
    id: 90,
    email: 'magmafellow@gmail.com',
    username: 'magmafellow',
    password: 'magma!',
  },
  {
    id: 91,
    email: 'mazda@rx.ru',
    username: 'mazda',
    password: 'mazda!',
  },
  {
    id: 92,
    email: 'tester@tester.ru',
    username: 'tester',
    password: 'test',
  },
]

export const blogs: InsertBlog[] = [
  {
    id: 8001,
    title: 'How to preview Next.js application on phone?',
    bite: 'Did you once want to check your running Next.js application on phone? I did but it was not easy to find the solution. So far how create-react-app provides this out-of-the-box in Next.js You might struggle a lot before you know how to to do so. In this article I talk about this thing',
    content: 'content of blog with id of 8001',
  },
  {
    id: 8002,
    title: '2 Is Tailwindcss Best option?',
    bite: 'Did you once want to check your running Next.js application on phone? I did but it was not easy to find the solution. So far how create-react-app provides this out-of-the-box in Next.js You might struggle a lot before you know how to to do so. In this article I talk about this thing',
    content: 'content of blog with id of 8002',
  },
  {
    id: 8003,
    title: 'Is your app fast enough? Is speed important?',
    bite: 'Did you once want to check your running Next.js application on phone? I did but it was not easy to find the solution. So far how create-react-app provides this out-of-the-box in Next.js You might struggle a lot before you know how to to do so. In this article I talk about this thing',
    content: 'content of blog with id of 8003',
  },
]

export const blogsTags: InsertBlogTag[] = [
  {
    id: 6001,
    blog_id: 8001,
    tag_id: 1,
  },
  {
    id: 6002,
    blog_id: 8001,
    tag_id: 6,
  },
  {
    id: 6003,
    blog_id: 8002,
    tag_id: 2,
  },
  {
    id: 6004,
    blog_id: 8003,
    tag_id: 7,
  },
]
