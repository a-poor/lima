import React from "react";
import {
  MagnifyingGlassIcon
} from "@phosphor-icons/react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ArrowLeft,
  File,
  Inbox,
  MessagesSquare,
  MoreHorizontal,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { TooltipProvider } from "@/components/ui/tooltip"

import { AccountSwitcher } from "@/components/mail-account-switcher"
import { MailDisplay } from "@/components/mail-display"
import { MailList } from "@/components/mail-list"
import { Nav } from "@/components/mail-nav"
import { ChatPlaceholder } from "@/components/chat-placeholder"
import type { Mail } from "@/dtypes"
import { useMail } from "@/components/mail-util"

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
  chatCollapsedSize: number
}

export function Mail({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [isChatCollapsed, setIsChatCollapsed] = React.useState(false)
  const [mailView, setMailView] = React.useState<"all" | "unread">("all")
  const [mail, setMail] = useMail()
  const selectedMail = mails.find((item) => item.id === mail.selected) || null

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
          }}
          onResize={() => {
            setIsCollapsed(false)
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                variant: "default",
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                variant: "ghost",
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
                variant: "ghost",
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
                variant: "ghost",
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                variant: "ghost",
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Social",
                label: "972",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Updates",
                label: "342",
                icon: AlertCircle,
                variant: "ghost",
              },
              {
                title: "Forums",
                label: "128",
                icon: MessagesSquare,
                variant: "ghost",
              },
              {
                title: "Shopping",
                label: "8",
                icon: ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Promotions",
                label: "21",
                icon: Archive,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          {mail.selected ? (
            <div className="flex h-full flex-col">
              <div className="flex h-[52px] items-center px-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMail({ selected: null })}
                  className="mr-2"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back
                </Button>
                <h1 className="text-xl font-bold truncate">
                  {selectedMail?.subject || 'Email'}
                </h1>
              </div>
              <Separator />
              <div className="flex-1">
                <MailDisplay mail={selectedMail} />
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col">
              <div className="flex h-[52px] shrink-0 items-center justify-center px-4">
                <h1 className="text-xl font-bold">Inbox</h1>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setMailView("all")}>
                      All mail
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setMailView("unread")}>
                      Unread
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Separator />
              <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <form>
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
              </div>
              <div className="flex-1">
                <MailList items={mailView === "all" ? mails : mails.filter((item) => !item.read)} />
              </div>
            </div>
          )}
        </ResizablePanel>
        <ResizableHandle withHandle={!isChatCollapsed} />
        <ResizablePanel
          defaultSize={defaultLayout[2]}
          collapsedSize={0}
          collapsible={true}
          minSize={15}
          maxSize={40}
          onCollapse={() => {
            setIsChatCollapsed(true)
          }}
          onResize={() => {
            setIsChatCollapsed(false)
          }}
        >
          <ChatPlaceholder />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}