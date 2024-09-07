"use client";

import authRequest from "@/app/apiRequests/auth";
import { sessionToken } from "@/lib/http";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tokenParam = searchParams.get("token");
  useEffect(() => {
    const token = sessionToken.value;
    if (tokenParam === token) {
      authRequest.logoutFromClientToNextServer(true).then((res) => {
        router.push("/auth/login");
      });
    }
  }, [tokenParam, router]);
  return (
    <div>
      <h1>Logout Page</h1>
    </div>
  );
}
