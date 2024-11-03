'use client'
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Sparkles } from "lucide-react";
import { PencilOff } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()
  return pathname !== '/editor' && (
    <nav>
      {/* Navbar placeholder to prevent content shift */}
      <div className="w-full h-[68px]" />

      {/* Navbar with fixed position and high z-index */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 border-b-[1px] backdrop-blur-[5px] z-50">
        {/* Left Side - Logo */}
        <div className="flex items-center w-full">
          <Link href="/" className="flex items-center justify-center">
            <span className="text-xl font-bold ">drawBase</span>
            <PencilOff />
          </Link>
        </div>

        {/* Center - Menu Bar */}
        <div className="flex space-x-4 items-center justify-center w-full">
          <Menubar>
            <MenubarMenu>
              <Link href="/features">
                <Button size="sm" variant="link">
                  Features
                </Button>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link href="/editor">
                <Button size="sm" variant="link">
                  Editor
                </Button>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link href="/templates">
                <Button size="sm" variant="link">
                  Templates
                </Button>
              </Link>
            </MenubarMenu>
          </Menubar>
        </div>

        {/* Right Side - GitHub Star Button and Mode Toggle */}
        <div className="flex items-center space-x-4 w-full justify-end">
          <Link
            href="https://github.com/tejasbenibagde/drawBaseX"
            target="_blank"
          >
            <Button
              variant="gooeyLeft"
              className="flex items-center justify-center gap-2"
            >
              <Sparkles size="20" />
              <span className="h-full flex items-end justify-center">
                Star on GitHub
              </span>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
