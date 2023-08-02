import { z } from "zod";

export const projectFormSchema = z.object({
  name: z.string().nonempty(),
  color: z.string().nonempty(),
});

export type ProjectForm = z.infer<typeof projectFormSchema>;

export interface Project extends ProjectForm {
  _id: string;
}
