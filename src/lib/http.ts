import envConfig from "@/config";
import { log } from "console";

type CustomRequestOptions = RequestInit & {
  baseUrl?: string | undefined;
};

const ENTITY_ERROR_STATUS = 422;
const AUTHENTICATION_ERROR_STATUS = 401;

type EntityErrorPayload = {
  message: string;
  errors: { field: string; message: string }[];
};

export class HttpError extends Error {
  status: number;
  payload: {
    message: string;
    [key: string]: any;
  };
  constructor(status: number, payload: any) {
    super("Có lỗi xảy ra");
    this.status = status;
    this.payload = payload;
  }
}

export class EntityError extends HttpError {
  status: 422;
  payload: EntityErrorPayload;

  constructor(payload: EntityErrorPayload) {
    super(ENTITY_ERROR_STATUS, payload);
    this.status = ENTITY_ERROR_STATUS;
    this.payload = payload;
  }
}

class SessionToken {
  private token = "";
  get value() {
    return this.token;
  }

  set value(token: string) {
    // Đảm bảo method này chỉ dùng dc ở client
    if (typeof window === "undefined") {
      throw new Error("Không thể set session token ở server");
    }
    this.token = token;
  }
}

const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options?: CustomRequestOptions | undefined
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined;
  const headers = {
    "Content-Type": "application/json",
  };
  const baseUrl =
    options?.baseUrl === undefined
      ? envConfig.NEXT_PUBLIC_API_DOMAIN
      : options.baseUrl;

  const fullUrl = url.startsWith("/")
    ? `${baseUrl}${url}`
    : `${baseUrl}/${url}`;
  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
    body,
    method,
  });

  const payload: Response = await res.json();
  const data = {
    status: res.status,
    payload,
  };
  
  if (!res.ok) {
    if (res.status === ENTITY_ERROR_STATUS) {
      throw new EntityError(data.payload as EntityErrorPayload);
    }
    throw new HttpError(data.status, data.payload);
  }

  return data;
};

const http = {
  get<Response>(
    url: string,
    options?: Omit<CustomRequestOptions, "body"> | undefined
  ) {
    return request<Response>("GET", url, options);
  },
  post<Response>(
    url: string,
    body: any,
    options?: Omit<CustomRequestOptions, "body"> | undefined
  ) {
    return request<Response>("POST", url, { ...options, body });
  },
  put<Response>(
    url: string,
    body: any,
    options?: Omit<CustomRequestOptions, "body"> | undefined
  ) {
    return request<Response>("POST", url, { ...options, body });
  },
  delete<Response>(
    url: string,
    body: any,
    options?: Omit<CustomRequestOptions, "body"> | undefined
  ) {
    return request<Response>("POST", url, { ...options, body });
  },
};

export default http;
export const sessionToken = new SessionToken();
