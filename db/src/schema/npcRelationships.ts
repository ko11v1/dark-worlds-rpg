import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const npcRelationshipsTable = pgTable("npc_relationships", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull(),
  name: text("name").notNull(),
  relationship: integer("relationship").notNull().default(0),
  status: text("status").notNull().default("Neutral"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertNpcRelationshipSchema = createInsertSchema(npcRelationshipsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertNpcRelationship = z.infer<typeof insertNpcRelationshipSchema>;
export type NpcRelationship = typeof npcRelationshipsTable.$inferSelect;
