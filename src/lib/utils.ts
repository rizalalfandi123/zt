import { ModelOption, OptionItem } from "@/schema-and-types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function toTitleCase(input: string): string {
  const words = input.split(" ");

  const titleCaseWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  return titleCaseWords.join(" ");
}

export function reorder<T>(list: T[], startIndex: number, endIndex: number): T[] {
  const result = [...list];

  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
}


export function isOptionModel(item: ModelOption): item is OptionItem {
  return (item as OptionItem).label !== undefined;
}
