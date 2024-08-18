type Project = {
  title: string
  description: string
  tags: string[] | []
  imagePath: string
  projectURL: string
}

const projects: Project[] = [
  {
    title: 'Direct Chat',
    description: 'Direct Chat is a powerful messanger with uncommon philosophy of how you interact with it. In this app a thing around which everythingrevolves is a chat',
    tags: ['typescript', 'css', 'css animations'],
    imagePath: 'direct-chat.png',
    projectURL: 'project-url',
  },
  {
    title: 'Citation App',
    description: 'Direct Chat is a powerful messanger with uncommon philosophy of how you interact with it. In this app a thing around which everythingrevolves is a chat',
    tags: ['javascript', 'css', 'DOM'],
    imagePath: 'explore.png',
    projectURL: 'project-url',
  },
  {
    title: 'Direct Chat',
    description: 'Direct Chat is a powerful messanger with uncommon philosophy of how you interact with it. In this app a thing around which everythingrevolves is a chat',
    tags: ['React', 'NextJS', 'css animations', 'Postgres'],
    imagePath: 'design-think.png',
    projectURL: 'project-url',
  },
]

export default projects
