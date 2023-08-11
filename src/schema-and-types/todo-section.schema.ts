import { z } from "zod";

export const todoSectionFormSchema = z.object({
  name: z.string().nonempty(),
});

export type TodoSectionForm = z.infer<typeof todoSectionFormSchema>;

export interface TodoSection extends TodoSectionForm {
  _id: string;
  projectId: string;
}
