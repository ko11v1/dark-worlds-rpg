import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const statusEffectsTable = pgTable("status_effects", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull(),
  name: text("name").notNull(),
  effectType: text("effect_type").notNull().default("curse"),
  description: text("description").notNull(),
  duration: integer("duration"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertStatusEffectSchema = createInsertSchema(statusEffectsTable).omit({
  id: true,
  createdAt: true,
});
export type InsertStatusEffect = z.infer<typeof insertStatusEffectSchema>;
export type StatusEffect = typeof statusEffectsTable.$inferSelect;
