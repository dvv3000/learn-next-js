import http from "@/lib/http";
import { AccountResType } from "@/schema-validation/account.schema";

const accountApiRequest = {
  me: (token: string) => {
    return http.get<AccountResType>("account/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default accountApiRequest;
