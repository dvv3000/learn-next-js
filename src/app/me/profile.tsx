"use client";

import accountApiRequest from "@/app/apiRequests/account";
import { sessionToken } from "@/lib/http";
import { useEffect } from "react";

export default function Profile() {
  console.log(sessionToken.value);
  
  useEffect(() => {
    const fetchRequest = async () => {
      const result = await accountApiRequest.me(sessionToken.value);
      console.log(result);
    }

    fetchRequest();
  }, [])
  return <div>profile on next client</div>;
}
