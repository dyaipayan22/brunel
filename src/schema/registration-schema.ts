import { z } from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Enter a valid email address' }),
});

export type RegistrationFormInput = z.infer<typeof registrationSchema>;
