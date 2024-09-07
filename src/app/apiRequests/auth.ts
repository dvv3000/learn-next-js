import http from "@/lib/http";
import { MessageResType } from "@/schema-validation/common.schema";
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

  /**
   * Clear token in server, call from next server to server 
   * @param token 
   * @returns 
   */
  logoutFromNextServerToServer: (token: string) => {
    return http.post<MessageResType>("/auth/logout", {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
  }, 
  logoutFromClientToNextServer: (force: boolean | undefined) => {
    return http.post<MessageResType>("/api/auth/logout", {
      force
    }, {
      baseUrl: "",
    })
  }
};

export default authRequest;
