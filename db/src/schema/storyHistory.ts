import { pgTable, serial, integer, text, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const storyHistoryTable = pgTable("story_history", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull(),
  narrative: text("narrative").notNull(),
  choices: jsonb("choices").notNull().default([]).$type<string[]>(),
  chosenAction: text("chosen_action"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertStoryHistorySchema = createInsertSchema(storyHistoryTable).omit({
  id: true,
  createdAt: true,
});
export type InsertStoryHistory = z.infer<typeof insertStoryHistorySchema>;
export type StoryHistory = typeof storyHistoryTable.$inferSelect;
