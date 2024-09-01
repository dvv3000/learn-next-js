import { z } from "zod";

export const LoginBody = z
  .object({
    email: z.string().email({ message: "Must be a valid email." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 8 characters." })
      .max(255),
  })
  .strict();

export type LoginBodyType = z.TypeOf<typeof LoginBody>;

export const LoginResponse = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    }),
  }),
  message: z.string(),
});
export type LoginResponseType = z.TypeOf<typeof LoginResponse>
