import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import React from "react";

function AppHeader() {
  const {user}=useUser();
  return (
    <div className="p-2 w-full flex gap-3 items-center border-b">
      <SidebarTrigger />
      <h2 className="font-bold">{`Hii, ${user?.fullName} 👋`}</h2>
    </div>
  );
}

export default AppHeader;
