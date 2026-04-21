import { pgTable, text, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const companionsTable = pgTable("companions", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull(),
  catalogId: text("catalog_id").notNull().default(""),
  name: text("name").notNull(),
  role: text("role").notNull(),
  race: text("race").notNull(),
  backstory: text("backstory").notNull(),
  personality: text("personality").notNull(),
  currentHp: integer("current_hp").notNull().default(80),
  maxHp: integer("max_hp").notNull().default(80),
  relationship: integer("relationship").notNull().default(20),
  isAlive: boolean("is_alive").notNull().default(true),
  diedAt: text("died_at"),
  diedHow: text("died_how"),
  combatBonus: integer("combat_bonus").notNull().default(2),
  specialAbility: text("special_ability").notNull(),
  icon: text("icon").notNull(),
  joinedAt: timestamp("joined_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Companion = typeof companionsTable.$inferSelect;
