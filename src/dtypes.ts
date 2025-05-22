import { z } from "zod";

export const mailSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  text: z.string(),
  date: z.string(),
  read: z.boolean(),
  labels: z.array(z.string()),
});
export type Mail = z.infer<typeof mailSchema>;

