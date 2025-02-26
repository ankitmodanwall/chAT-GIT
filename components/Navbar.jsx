import Link from "next/link";
import { useState } from "react";


import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import TextShine from "@/components/TextShine";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>

      <div className='flex h-14 items-center justify-between border-b border-zinc-200 relative'>
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-8 h-1 bg-black mb-1"></span>
          <span className="block w-8 h-1 bg-black mb-1"></span>
          <span className="block w-8 h-1 bg-black"></span>
        </button>
        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-lg">
            <Link href="/explore" className="block p-2">Explore</Link>
            <Link href="/#howitworks" className="block p-2">How It Works</Link>
            <Link href="/login" className="block p-2">Login</Link>
            <Link href="/brand/signup" className="block p-2">
              <TextShine text={"Join as Brand"} />
            </Link>
            <Link href="/creator/signup" className="block p-2">
              <TextShine text={"Join as Creator"} />
            </Link>
          </div>
        )}

          <Link href='/' className='flex z-40 font-semibold items-center justify-center gap-x-2 rounded-md'>
            <div className='h-5 w-5 bg-black'></div>
            <span>INFLUENZAR</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/explore"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Explore
            </Link>
            <Link
              href="/#howitworks"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              How It Works
            </Link>
            <Link
              href="/login"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Login
            </Link>
            <Link
              href="/brand/signup"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <TextShine text={"Join as Brand"} />
            </Link>

            <Link
              href="/creator/signup"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <TextShine text={"Join as Creator"} />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
