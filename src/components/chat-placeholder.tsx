import { MessageCircle } from "lucide-react"

export function ChatPlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
        <MessageCircle className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Chat Interface</h3>
      <p className="text-sm text-muted-foreground max-w-sm">
        Chat functionality will be implemented here. This panel will allow you to interact with AI assistants about your emails.
      </p>
    </div>
  )
}