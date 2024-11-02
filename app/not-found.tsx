import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col h-[calc(100vh-170px)] lg:h-[calc(100vh-140px)]">
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              404 - Page Not Found
            </h1>
            <p className="mx-auto max-w-[700px] text-stone-400 dark:text-stone-500 md:text-xl">
              Oops! The page you&apos;re looking for doesn&apos;t exist. It might have
              been moved or deleted.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size={"lg"} variant={"ringHover"}>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
