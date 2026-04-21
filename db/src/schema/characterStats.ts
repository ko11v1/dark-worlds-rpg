import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const characterStatsTable = pgTable("character_stats", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull(),
  strength: integer("strength").notNull().default(10),
  agility: integer("agility").notNull().default(10),
  intelligence: integer("intelligence").notNull().default(10),
  endurance: integer("endurance").notNull().default(10),
  luck: integer("luck").notNull().default(10),
  charisma: integer("charisma").notNull().default(10),
  will: integer("will").notNull().default(10),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertCharacterStatsSchema = createInsertSchema(characterStatsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertCharacterStats = z.infer<typeof insertCharacterStatsSchema>;
export type CharacterStats = typeof characterStatsTable.$inferSelect;
