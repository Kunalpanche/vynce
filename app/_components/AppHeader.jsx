import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

function AppHeader() {
  return (
    <div className="p-2 w-full flex justify-between items-center border-b">
      <SidebarTrigger />
      <Button>Sign In</Button>
    </div>
  );
}

export default AppHeader;
