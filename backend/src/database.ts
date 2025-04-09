import fs from "fs/promises"
import path from "path"

const DB_DIR = path.join(process.cwd(), "data")

// Ensure the data directory exists
async function ensureDbDir() {
  try {
    await fs.access(DB_DIR)
  } catch {
    await fs.mkdir(DB_DIR, { recursive: true })
  }
}

// Helper to get the full path for a table
function getTablePath(table: string): string {
  return path.join(DB_DIR, `${table}.json`)
}

// Helper to read a table's contents
async function readTable<T>(table: string): Promise<T[]> {
  try {
    const content = await fs.readFile(getTablePath(table), "utf-8")
    return JSON.parse(content)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return []
    }
    throw error
  }
}

// Helper to write a table's contents
async function writeTable<T>(table: string, data: T[]): Promise<void> {
  await fs.writeFile(getTablePath(table), JSON.stringify(data, null, 2))
}

/**
 * Interface defining the core database operations for storing and retrieving data.
 * This interface provides a contract for database implementations to follow.
 */
export interface Database {
  /**
   * Stores or updates an item in the specified table.
   * If an item with the same ID already exists, it will be updated.
   * Otherwise, a new item will be created.
   *
   * @template T - The type of the item, must have an 'id' property
   * @param table - The name of the table to store the item in
   * @param item - The item to store or update
   * @returns A promise that resolves to the stored/updated item
   */
  putItem<T extends { id: string }>(table: string, item: T): Promise<T>

  /**
   * Retrieves an item from the specified table by its ID.
   *
   * @template T - The type of the item, must have an 'id' property
   * @param table - The name of the table to query
   * @param id - The ID of the item to retrieve
   * @returns A promise that resolves to the found item, or null if not found
   */
  getItem<T extends { id: string }>(table: string, id: string): Promise<T | null>

  /**
   * Queries items from the specified table that match the given predicate.
   * If no predicate is provided, returns all items in the table.
   *
   * @template T - The type of the items in the table
   * @param table - The name of the table to query
   * @param predicate - Optional function to filter items
   * @returns A promise that resolves to an array of matching items
   */
  query<T>(table: string, predicate?: (item: T) => boolean): Promise<T[]>
}

// Database implementation
export class JsonDatabase implements Database {
  constructor() {
    ensureDbDir()
  }

  async putItem<T extends { id: string }>(table: string, item: T): Promise<T> {
    const items = await readTable<T>(table)
    const existingIndex = items.findIndex((i) => (i as any).id === item.id)

    if (existingIndex !== -1) {
      items[existingIndex] = item
    } else {
      items.push(item)
    }

    await writeTable(table, items)
    return item
  }

  async getItem<T extends { id: string }>(table: string, id: string): Promise<T | null> {
    const items = await readTable<T>(table)
    const item = items.find((i) => (i as any).id === id)
    return item || null
  }

  async query<T>(table: string, predicate?: (item: T) => boolean): Promise<T[]> {
    const items = await readTable<T>(table)
    return predicate ? items.filter(predicate) : items
  }
}

// Export a default instance
export const db = new JsonDatabase()
