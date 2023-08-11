'use client'
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React from "react";
interface Props
{
  children: React.ReactNode
}

const Providers = ({ children }: Props) =>
{
  return <SessionProvider>
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>

  </SessionProvider>
}

export default Providers