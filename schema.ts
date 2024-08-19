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
  features: text('features').notNull(), // fiatures json object
  resume: text('resumte').notNull(),
  pictures: text('pictures').notNull(), // pictures array
})

export const usersTable = pgTable('users_table', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  password: text('password').notNull(),
  email: text('email').notNull().unique(),
})

export const tagsTable = pgTable('tags_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
})

export const projectsTagsTable = pgTable('projects_tags_table', {
  id: serial('id').primaryKey(),
  project_id: integer('project_id').references(() => projectsTable.id, {
    onDelete: 'set null',
  }),
  tag_id: integer('tag_id').references(() => tagsTable.id, {
    onDelete: 'set null',
  }),
})

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect

export type InsertProject = typeof projectsTable.$inferInsert
export type SelectProject = typeof projectsTable.$inferSelect

export type InsertTag = typeof tagsTable.$inferInsert
export type SelectTag = typeof tagsTable.$inferSelect

export type InsertProjectTag = typeof projectsTagsTable.$inferInsert
export type SelectProjectTag = typeof projectsTagsTable.$inferSelect

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
