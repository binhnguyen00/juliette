import { SquareTerminal } from "lucide-react";
import { Link } from "@heroui/link";
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";

export function Navbar() {
  return (
    <HeroUINavbar className="flex flex-row justify-items-start" maxWidth="xl" position="sticky">
      <NavbarBrand className="gap-3 max-w-fit">
        <Link href="/">
          <SquareTerminal className="h-7 w-7"/>
        </Link>
        <Link href="/" className="text-xl font-bold"> Home </Link>
      </NavbarBrand>

      <NavbarContent className="sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="/page"> Page </Link>
        </NavbarItem>
      </NavbarContent>

    </HeroUINavbar>
  );
}