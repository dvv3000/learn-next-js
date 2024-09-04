"use client";

import accountApiRequest from "@/app/apiRequests/account";
import { sessionToken } from "@/lib/http";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    const fetchRequest = async () => {
      const result = await accountApiRequest.me(sessionToken.value);
    };

    fetchRequest();
  }, []);
  return <div>profile on next client</div>;
}
