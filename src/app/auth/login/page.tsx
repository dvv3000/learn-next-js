import LoginForm from "@/app/auth/login/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Card className="w-1/3">
        <CardHeader className="text-center text-xl font-semibold">
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </>
  );
}
