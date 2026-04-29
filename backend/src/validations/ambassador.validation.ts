import z from "zod";

export const ambassadorRegister = z.object({
    image: z.string().url(),
    location: z.string().min(1, "Location is required"),
    name: z.string().min(1, "Name is required"),
    position: z.string().min(1, "Position is required"),
    description: z.string().min(1, "Description is required"),
    recipe: z.string().min(1, "Recipe is required"),
});

export type ambassadorInput = z.infer<typeof ambassadorRegister>