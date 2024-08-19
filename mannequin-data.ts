import type { InsertProject } from './schema'

export const projects: Array<InsertProject> = [
  {
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
]
