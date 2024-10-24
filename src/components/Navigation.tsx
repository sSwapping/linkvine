import Link from "next/link";
import ThemeController from "./ThemeController";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";

const NavigationBar = () => {
  return (
    <div className='sticky z-50 top-3'>
      <header className='py-2 bg-white border-b shadow dark:bg-neutral-900/20 dark:border-neutral-800/50'>
        <div className='flex items-center justify-between max-w-sm mx-auto md:max-w-2xl lg:max-w-screen-2xl'>
          <div className='flex gap-12 px-4 md:gap-6'>
            <Link href={"/"} className='font-semibold lg:text-xl'>
              LinkVine
            </Link>
            <nav className='flex items-center gap-3 text-sm font-semibold md:text-base'>
              <Link href={"/about"} className='navbar'>
                About
              </Link>
              <Link href={"/pricing"} className='navbar'>
                Pricing
              </Link>
              <Link href={"/contact"} className='navbar'>
                Contact
              </Link>
            </nav>
          </div>
          <div className='flex items-center justify-center md:hidden'>
            <div className='flex gap-4 text-neutral-700 hover:text-neutral-950'>
              <MobileDropdown />
              <ThemeController />
            </div>
          </div>
          <div className='items-center justify-center hidden md:flex'>
            <div className='flex gap-4 text-neutral-700'>
              <Button>
                <Link href={"/login"}>Sign In</Link>{" "}
              </Button>
              <Button>
                <Link href={"/sign-up"}>Create Account</Link>
              </Button>
              <ThemeController />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

const MobileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <AlignJustify className='h-[1.2rem] w-[1.2rem] navbar focus-visible:outline-none' />
          <span className='sr-only'>Login / Register</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>
          <Link href={"/login"}>Sign In</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/sign-up"}>Create Account</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationBar;
