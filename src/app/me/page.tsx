import accountApiRequest from "@/app/apiRequests/account";
import Profile from "@/app/me/profile";
import { cookies } from "next/headers";

export default async function MeProfile() {
  const cookieStore = cookies();
  const token = cookieStore.get("sessionToken")?.value;

  const result = await accountApiRequest.me(token ?? "");
  
  return (
    <div>
      <div>Hi, {result.payload.data.name} </div>
      <Profile />
    </div>
  );
}
