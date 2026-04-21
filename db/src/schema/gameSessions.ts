import { pgTable, text, serial, timestamp, integer, jsonb, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const gameSessionsTable = pgTable("game_sessions", {
  id: serial("id").primaryKey(),
  playerName: text("player_name").notNull(),
  phase: text("phase").notNull().default("menu"),
  characterName: text("character_name"),
  race: text("race"),
  raceRarity: text("race_rarity"),
  class: text("class"),
  classRarity: text("class_rarity"),
  level: integer("level").notNull().default(1),
  experience: integer("experience").notNull().default(0),
  currentHp: integer("current_hp").notNull().default(100),
  maxHp: integer("max_hp").notNull().default(100),
  gold: integer("gold").notNull().default(50),
  moralAlignment: text("moral_alignment").notNull().default("Neutral"),
  factionName: text("faction_name"),
  factionKey: text("faction_key"),
  factionReputation: integer("faction_reputation").notNull().default(0),
  age: integer("age").notNull().default(20),
  statPoints: integer("stat_points").notNull().default(0),
  storyContext: text("story_context").notNull().default(""),
  lastNarrative: text("last_narrative"),
  choices: jsonb("choices").notNull().default([]).$type<string[]>(),
  enemyName: text("enemy_name"),
  enemyHp: integer("enemy_hp"),
  enemyMaxHp: integer("enemy_max_hp"),
  combatRound: integer("combat_round").notNull().default(0),
  killCount: integer("kill_count").notNull().default(0),
  traits: jsonb("traits").notNull().default([]).$type<string[]>(),
  bankGold: integer("bank_gold").notNull().default(0),
  visitedRegions: jsonb("visited_regions").notNull().default(["Пепельные Руины"]).$type<string[]>(),
  currentRegion: text("current_region").notNull().default("Пепельные Руины"),
  prestigeClass: text("prestige_class"),
  legacyBonus: integer("legacy_bonus").notNull().default(0),
  // --- New fields ---
  weather: text("weather").notNull().default("ясно"),
  timeOfDay: text("time_of_day").notNull().default("день"),
  turnCount: integer("turn_count").notNull().default(0),
  activeContracts: jsonb("active_contracts").notNull().default([]).$type<Array<{
    id: string; target: string; targetType: string; reward: number;
    expiresIn: number; completed: boolean; description: string;
  }>>(),
  activeFamiliar: jsonb("active_familiar").$type<{
    name: string; type: string; icon: string;
    passiveBonus: string; description: string; combatBonus: number;
  } | null>(),
  worldEvent: jsonb("world_event").$type<{
    name: string; description: string; effect: string; turnsLeft: number;
  } | null>(),
  finalBossDefeated: boolean("final_boss_defeated").notNull().default(false),
  // --- Dungeon system ---
  activeDungeon: jsonb("active_dungeon").$type<{
    dungeonId: string; name: string; currentFloor: number; totalFloors: number;
    floorDescription: string; roomsCleared: number; totalRooms: number; bossDefeated: boolean;
  } | null>(),
  // --- Siege system ---
  activeSiege: jsonb("active_siege").$type<{
    siegeName: string; region: string; isAttacker: boolean; phase: string;
    turnsLeft: number; result: string | null;
  } | null>(),
  // --- Region mythology ---
  regionDeities: jsonb("region_deities").notNull().default({}).$type<Record<string, number>>(),
  // --- Mana system ---
  currentMana: integer("current_mana").notNull().default(0),
  maxMana: integer("max_mana").notNull().default(0),
  // --- Settlements ---
  discoveredSettlements: jsonb("discovered_settlements").notNull().default(["ash_outpost"]).$type<string[]>(),
  currentSettlement: text("current_settlement").default("ash_outpost"),
  // --- Ending tracking ---
  endingUnlocked: text("ending_unlocked"),
  totalKills: integer("total_kills").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const insertGameSessionSchema = createInsertSchema(gameSessionsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export type InsertGameSession = z.infer<typeof insertGameSessionSchema>;
export type GameSession = typeof gameSessionsTable.$inferSelect;
