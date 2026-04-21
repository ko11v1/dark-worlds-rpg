import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";

export const ashDiaryTable = pgTable("ash_diary", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull(),
  title: text("title").notNull(),
  entry: text("entry").notNull(),
  eventType: text("event_type").notNull(),
  turnNumber: integer("turn_number").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type AshDiaryEntry = typeof ashDiaryTable.$inferSelect;
