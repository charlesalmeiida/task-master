import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email({ message: "O email é obrigatório" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
})
