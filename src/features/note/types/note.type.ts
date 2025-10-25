import * as z from "zod";
import { noteSchema } from "@/features/note/schemas/note.schema";

export type noteType = z.infer<typeof noteSchema>
