"use client";
import { sessionToken } from "@/lib/http";
import { useState } from "react";


export default function AppProvider({ children, intialSessionToken }: {
	children: React.ReactNode;
	intialSessionToken?: string;
}) {
  useState(() => {
    sessionToken.value = intialSessionToken ?? "";
  })
  return (
    <>
      {children}
    </>
  );
}
