"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

import React from "react";

function page() {
  const { setTheme } = useTheme();
  return (
    <div>
      <p>Welcome to vynce</p>
    </div>
  );
}

export default page;
