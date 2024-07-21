import RegisterForm from "@/components/register-form";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Join to our community</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <div className="flex w-3/4 card"></div>
    </>
  );
}
