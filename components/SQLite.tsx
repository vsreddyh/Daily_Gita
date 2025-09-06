import { useSQLiteContext } from "expo-sqlite";

export function useDB() {
  const db = useSQLiteContext();

  const getVerse = async (chapter: integer, verse: integer) => {
    try {
      const result = await db.getFirstAsync("SELECT * FROM verses LIMIT 1");
      return result;
    } catch (error) {
      console.error("Error fetching verse:", error);
      return null;
    }
  };

  return { getVerse };
}
