import z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('Email inválido').min(5, 'Email é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});
