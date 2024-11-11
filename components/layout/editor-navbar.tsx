import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { Plus } from "lucide-react";

import AddTable from "./editor-menu/add-table";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  // Add additional components here as needed
];

function EditorNavbar() {
  return (
    <div className="w-full flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>File</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex gap-3 p-4 md:w-[400px] lg:w-[500px] lg:justify-between">
                {/* Left Links */}
                <div className="flex flex-col gap-2 h-full">
                  <NavigationMenuLink asChild className="h-full">
                    <a
                      className="flex w-full h-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                      href="/new-window"
                    >
                      <Plus size={20} />
                      <span className="mt-2 text-lg font-medium">New Window</span>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild className="h-full">
                    <a
                      className="flex w-full h-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                      href="/new-project"
                    >
                      <Plus size={20} />
                      <span className="mt-2 text-lg font-medium">New Project</span>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>

                {/* Right Links */}
                <div className="grid lg:grid-cols-1 md:w-[200px] lg:w-[300px]">
                  <ListItem href="/docs" title="Open" className="p-2">
                    Ctrl+O
                  </ListItem>
                  <ListItem href="/docs/installation" title="Save As" className="p-2">
                    Ctrl+S
                  </ListItem>
                  <ListItem href="/docs/installation" title="Save As Template" className="p-2">
                    Ctrl+Shift+S
                  </ListItem>
                  <ListItem href="/docs/installation" title="Rename" className="p-2">
                    Ctrl+S
                  </ListItem>
                  <ListItem href="/docs/installation" title="Delete Diagram" className="p-2">
                    Ctrl+S
                  </ListItem>
                  <ListItem href="/docs/installation" title="Import Diagram" className="p-2">
                    Ctrl+I
                  </ListItem>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Edit</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <AddTable variant={"outline"}><Plus /></ AddTable>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default EditorNavbar;
