import { makeApi } from "@zodios/axios";
import { z } from "zod";

const LoginRequest = z.object({ login_id: z.string(), password: z.string() });
const LoginResponse = z
  .object({
    access_token: z.string().nullable(),
    session: z.string().nullable(),
  })
  .partial();
const ValidationError = z.object({
  loc: z.array(
    z.union([
      z.union([z.string(), z.number()]),
      z.array(z.union([z.string(), z.number()])),
    ])
  ),
  msg: z.string(),
  type: z.string(),
});
const HTTPValidationError = z
  .object({ detail: z.array(ValidationError) })
  .partial();

export const endpoints = makeApi([
  {
    method: "post",
    path: "/api/login",
    alias: "login",
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: LoginRequest,
      },
    ],
    response: LoginResponse,
    errors: [
      {
        status: 422,
        description: `Validation Error`,
        schema: HTTPValidationError,
      },
    ],
  },
]);

export type LoginRequest = z.infer<typeof LoginRequest>;
export type LoginResponse = z.infer<typeof LoginResponse>;
export type ValidationError = z.infer<typeof ValidationError>;
export type HTTPValidationError = z.infer<typeof HTTPValidationError>;
