import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import EditorNavbar from "@/components/layout/editor-navbar";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen relative">
        <div className="flex w-full p-4">
          <div className="flex h-5 items-center space-x-4 text-sm w-full">
            <SidebarTrigger />
            <Separator orientation="vertical" />
            <EditorNavbar />
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
