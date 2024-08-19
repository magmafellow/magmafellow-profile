import { db } from '../db'
import { InsertPost, InsertUser, postsTable, usersTable } from '@/example-schema'

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data)
}

export async function createPost(data: InsertPost) {
  await db.insert(postsTable).values(data)
}

async function makeQueryCreateUser(){
  const alex = {
    name: 'alex',
    email: 'lekha2000a@mail.ru',
    age: 19,
  }

  const r = await createUser(alex)
  console.log('=> create user request')

}

makeQueryCreateUser()
