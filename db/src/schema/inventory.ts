import { pgTable, serial, integer, text, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const inventoryTable = pgTable("inventory", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull(),
  name: text("name").notNull(),
  category: text("category").notNull().default("consumables"),
  rarity: text("rarity").notNull().default("Common"),
  description: text("description").notNull(),
  stats: jsonb("stats").notNull().default({}).$type<Record<string, number>>(),
  quantity: integer("quantity").notNull().default(1),
  enchantments: jsonb("enchantments").notNull().default({}).$type<Record<string, number>>(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertInventorySchema = createInsertSchema(inventoryTable).omit({
  id: true,
  createdAt: true,
});
export type InsertInventory = z.infer<typeof insertInventorySchema>;
export type InventoryItem = typeof inventoryTable.$inferSelect;
