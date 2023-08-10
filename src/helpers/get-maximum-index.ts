import type { SortableModel } from "@/schema-and-types";


export function getMaximumIndex<T extends SortableModel>(data: Record<string, T>): number {
    let max = 0

    Object.keys(data).forEach(key => {
        if (data[key].index > max) {
            max = data[key].index
        }
    })

    return max
} 