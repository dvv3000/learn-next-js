import http from "@/lib/http";
import {
  LoginBodyType,
  LoginResponseType,
} from "@/schema-validation/login-body";
import {
  RegisterBodyType,
  RegisterResType,
} from "@/schema-validation/register-body";

const authRequest = {
  login: (body: LoginBodyType) => {
    return http.post<LoginResponseType>("/auth/login", body);
  },
  register: (body: RegisterBodyType) => {
    return http.post<RegisterResType>("/auth/register", body);
  },
  auth: (body: { token: string }) => {
    return http.post<RegisterResType>("/api/auth", body, {
      baseUrl: "",
    });
  },
};

export default authRequest;
