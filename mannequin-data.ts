import { v4 } from 'uuid'
import type {
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
      'A powerful chat app that provides unlimited strength of freedom by strong stack of security',
    features: JSON.stringify([
      ['Security', 'that powers you'],
      ['Design', 'simplicity of which engages you'],
    ]),
    pictures: JSON.stringify([
      'direct-chat_01',
      'direct-chat_02',
      'direct-chat_03',
    ]),
    resume:
      'Whether you use this as chat with friend or tool to communicate with your group. You are doing this securely!',
  },
  {
    id: 501,
    name: 'Explore Nature',
    description:
      'An web static website. It has been done to master html and css skills',
    features: JSON.stringify([
      ['Advanced HTML markup', 'was used'],
      ['Css BEM metodology', 'was used'],
    ]),
    pictures: JSON.stringify(['explore-nature_01', 'explore-nature_02']),
    resume: 'A static website. Advanced css trciks, cute design',
  },
  {
    id: 502,
    name: 'Design Think',
    description:
      'An web static website. New methods of laying out blocks were learnt',
    features: JSON.stringify([
      ['Advanced HTML markup', 'was used'],
      ['CSS tricks', 'were used there'],
    ]),
    pictures: JSON.stringify([
      'design-think_01',
      'design-think_02',
      'design-think_03',
    ]),
    resume: 'A static website. Interesting css tricks',
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

export const blogs = [
  {
    id: 8001,
    title: 'How to preview Next.js application on phone?',
    bite: 'Did you once want to check your running Next.js application on phone? I did but it was not easy to find the solution. So far how create-react-app provides this out-of-the-box in Next.js You might struggle a lot before you know how to to do so. In this article I talk about this thing',
    date: '17 Fri August',
    tags: ['next.js', 'tricks', 'mobile'],
  },
]
