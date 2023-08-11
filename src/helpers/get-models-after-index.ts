import type { SortableModel } from "@/schema-and-types";

export function getModelsAfterIndex<T extends SortableModel>(data: Record<string, T>, targetIndex: number): T[] {
  const result: T[] = [];

  Object.keys(data).forEach((key) => {
    if (data[key].index >= targetIndex) {
      result.push(data[key]);
    }
  });

  return result;
}
