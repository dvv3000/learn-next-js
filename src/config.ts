import { z } from "zod";

const configSchema = z.object({
  NEXT_PUBLIC_API_DOMAIN: z.string(),
  NEXT_PUBLIC_URL: z.string(),
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
});
if (!configProject.success) {
  console.error(configProject.error.issues);
  throw new Error("Các giá trị khai báo trong file .env không hợp lệ");
}

const envConfig = configProject.data;
 
export default envConfig;
