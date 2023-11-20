"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { useNavbarStore } from "@/store/zustand";
import { Menu } from "lucide-react";

export default function Header() {
  const { toggleNavbar } = useNavbarStore();

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between lg:justify-end px-4 py-3 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              toggleNavbar();
            }}
            className="z-99999 block rounded-md border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden">
            <Menu size={18} className="relative block h-5.5 w-5.5 cursor-pointer" />
          </button>
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image width={32} height={32} src={"/images/logo/logo-icon.png"} alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <ThemeSwitcher />
            <DropdownNotification />
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
}
