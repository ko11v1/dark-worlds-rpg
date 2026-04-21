import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const memorialsTable = pgTable("memorials", {
  id: serial("id").primaryKey(),
  playerName: text("player_name").notNull(),
  characterName: text("character_name"),
  race: text("race"),
  class: text("class"),
  prestigeClass: text("prestige_class"),
  level: integer("level").notNull().default(1),
  killCount: integer("kill_count").notNull().default(0),
  gold: integer("gold").notNull().default(0),
  factionName: text("faction_name"),
  factionKey: text("faction_key"),
  guildRank: text("guild_rank"),
  factionReputation: integer("faction_reputation").notNull().default(0),
  causeOfDeath: text("cause_of_death"),
  traits: text("traits"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Memorial = typeof memorialsTable.$inferSelect;
