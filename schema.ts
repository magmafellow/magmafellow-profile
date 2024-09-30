import { sql } from 'drizzle-orm'
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  json,
  uuid,
  date,
} from 'drizzle-orm/pg-core'

export const projectsTable = pgTable('projects_table', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  features: text('features').notNull(), // fiatures json object [['fast', 'to send messages'], ['Secure:', 'Uses strong opinion on encoding']]
  resume: text('resumte').notNull(),
  pictures: text('pictures').notNull(), // pictures array ['/images/01.png', '/images/02.png']
  rating: integer('rating').notNull(),
  // startedAt: timestamp('started_at').notNull().defaultNow(),
})

export const usersTable = pgTable('users_table', {
  id: integer('id').primaryKey(),
  username: text('username').notNull(),
  password: text('password').notNull(),
  email: text('email').notNull().unique(),
})

export const tagsTable = pgTable('tags_table', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
})

export const projectsTagsTable = pgTable('projects_tags_table', {
  id: integer('id').primaryKey(),
  project_id: integer('project_id').references(() => projectsTable.id, {
    onDelete: 'set null',
  }),
  tag_id: integer('tag_id').references(() => tagsTable.id, {
    onDelete: 'set null',
  }),
})

export const blogsTable = pgTable('blogs_table', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  bite: text('bite').notNull(),
  date_created: timestamp('date_created').defaultNow().notNull(),
  content: text('content').notNull(), // markup content
  minToRead: integer('min_to_read'),
})

export const blogsTagsTable = pgTable('blogs_tags_table', {
  id: integer('id').primaryKey(),
  blog_id: integer('blog_id').references(() => blogsTable.id, {
    onDelete: 'set null',
  }),
  tag_id: integer('tag_id').references(() => tagsTable.id, {
    onDelete: 'set null',
  }),
})

export const contactsTable = pgTable('contacts_table', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect

export type InsertProject = typeof projectsTable.$inferInsert
export type SelectProject = typeof projectsTable.$inferSelect

export type InsertTag = typeof tagsTable.$inferInsert
export type SelectTag = typeof tagsTable.$inferSelect

export type InsertProjectTag = typeof projectsTagsTable.$inferInsert
export type SelectProjectTag = typeof projectsTagsTable.$inferSelect

export type InsertBlog = typeof blogsTable.$inferInsert
export type SelectBlog = typeof blogsTable.$inferSelect

export type InsertBlogTag = typeof blogsTagsTable.$inferInsert
export type SelectBlogTag = typeof blogsTagsTable.$inferSelect

// example code
// export const usersTable = pgTable('users_table', {
//   id: serial('id').primaryKey(),
//   name: text('name').notNull(),
//   age: integer('age').notNull(),
//   email: text('email').notNull().unique(),
// })

// export const postsTable = pgTable('posts_table', {
//   id: serial('id').primaryKey(),
//   title: text('title').notNull(),
//   content: text('content').notNull(),
//   userId: integer('user_id')
//     .notNull()
//     .references(() => usersTable.id, { onDelete: 'cascade' }),
//   createdAt: timestamp('created_at').notNull().defaultNow(),
//   updatedAt: timestamp('updated_at')
//     .notNull()
//     .$onUpdate(() => new Date())
// })

// export type InsertUser = typeof usersTable.$inferInsert
// export type SelectUser = typeof usersTable.$inferSelect

// export type InsertPost = typeof postsTable.$inferInsert
// export type SelectPost = typeof postsTable.$inferSelect
