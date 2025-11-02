"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";
import ChatBox from "./_components/ChatBox";

function page() {
  const { setTheme } = useTheme();
  return (
    <div>
      <ChatBox/>
    </div>
  );
}

export default page;
