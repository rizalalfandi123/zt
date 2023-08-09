import { z } from "zod";

export const projectFormSchema = z.object({
  name: z.string().nonempty(),
  color: z.string().nonempty(),
});

export const todoSectionFormSchema = z.object({
  name: z.string().nonempty(),
});
