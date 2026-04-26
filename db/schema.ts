import { pgTable, integer, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const shortenedLinks = pgTable('shortened_links', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar('user_id', { length: 255 }).notNull(), // Clerk user ID
  shortCode: varchar('short_code', { length: 32 }).notNull().unique(),
  url: text('url').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export type Link = typeof shortenedLinks.$inferSelect;
export type NewLink = typeof shortenedLinks.$inferInsert;