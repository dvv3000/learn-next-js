"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/hooks/use-toast";
import { LoginBody, LoginBodyType } from "@/schema-validation/login-body";
import authRequest from "@/app/apiRequests/auth";
import { useRouter } from "next/navigation";
import { sessionToken } from "@/lib/http";
import { handleErrorApi } from "@/lib/utils";

export default function LoginForm() {
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false)

  // 2. Define a submit handler.
  async function onSubmit(values: LoginBodyType) {
    setLoading(true)
    try {
      const result = await authRequest.login(values);
      toast({
        title: "Thông báo",
        description: result.payload.message,
        variant: "success",
      });
      await authRequest.auth({
        token: result.payload.data.token,
      });
      sessionToken.value = result.payload.data.token
      router.push("/me");
    } catch (error: any) {
      handleErrorApi({
        error,
        setError: form.setError,
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (error) => {
            console.error(error);
          })}
          className="space-y-4 w-full max-w-[600px]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pasword</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-8" disabled={loading}>
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
