"use client"
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Bolt, Ghost, LogIn, MessageCirclePlus, Moon, Plus, Settings2, SquareUserRoundIcon, Sun, User, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import CreditUsage from "./CreditUsage";
// ...existing code...
export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const { user } = useUser();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src={"/logo.svg"}
                alt="Logo"
                width={60}
                height={60}
                className="w-[40px] h-[40px]"
              />
              <h1 className="font-bold text-xl">Vynce</h1>
            </div>
            <div >
              {theme == "light" ? (
                <Button variant={Ghost} onClick={() => setTheme("dark")}>
                  <Sun />
                </Button>
              ) : (
                <Button variant={Ghost} onClick={() => setTheme("light")}>
                  <Moon />
                </Button>
              )}
            </div>
          </div>
          <div className="mt-8">

            {user? <Button className="w-full">
              <MessageCirclePlus className="mr-2" /> New Chat{" "}
            </Button>
            :
            <SignInButton mode="modal">
            <Button className="w-full">
              <MessageCirclePlus className="mr-2" /> New Chat{" "}
            </Button>
            </SignInButton>}
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-2">
            <h2 className="font-bold text-lg">Chat</h2>
            {!user&& <p className="text-sm text-muted-foreground">
              Sign in to explore insights from multiple AI models.
            </p>}
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2 mb-2">
          {!user ? (
            <SignInButton mode="modal">
              <Button className="w-full">
                {" "}
                <LogIn className="mr-2" /> Sign In / Up{" "}
              </Button>
            </SignInButton>
          ) : (
            <div>
              <CreditUsage/>
              <Button className='w-full mb-3'> <Zap/>Upgrade to Pro</Button>
            <Button className='flex w-full' variant={'outline'}>
             <User /> <h2>Settings</h2>
            </Button>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
