import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  json,
  uuid,
} from 'drizzle-orm/pg-core'

export const projectsTable = pgTable('projects_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  features: json('features'), // fiatures json object
  resume: text('resumte').notNull(),
  pictures: json('pictures').notNull(), // pictures array
})

export const usersTable = pgTable('users_table', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  password: text('password').notNull(),
  email: text('email').notNull().unique(),
})

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
