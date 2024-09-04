"use client";

import authRequest from "@/app/apiRequests/auth";
import { Button } from "@/components/ui/button";
import { sessionToken } from "@/lib/http";
import { handleErrorApi } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ButtonLogout() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const result = await authRequest.logoutFromClientToNextServer();
      console.log(sessionToken);
      sessionToken.value = "";
      router.push("/auth/login");
    } catch (error) {
      handleErrorApi({ error });
    }
  };
  return (
    <Button size={"sm"} onClick={handleLogout}>
      Logout
    </Button>
  );
}
