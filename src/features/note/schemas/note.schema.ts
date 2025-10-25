import * as z from "zod"

export const noteSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .min(3, "Title must be at least 3 characters.")
        .max(32, "Bug title must be at most 32 characters."),
    body: z
        .string()
        .min(15, "Body must be at least 15 characters.")
        .max(1000, "Body must be at most 1000 characters."),
    tags: z
        .array(z.string().min(3, "Tag must be at least 3 characters"))
        .min(1, "At least one tag is required"),
    id: z.string()
})