"use client";
import Image from "next/image";
import Link from "next/link";
import About from "@/app/about/page";
import Playground from "@/app/playground/page";
import Resource from "@/app/resource/page";
import Work from "@/app/work/page";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center">
      <div className="flex justify-evenly object-contain items-center m-8 text-xs h-8 w-full shadow-lg shadow-black/40 rounded-xl gap-2 text-white bg-black sm:w-full sm:h-10 sm:rounded-2xl sm:max-w-xl md:w-full md:h-12 md:rounded-3xl md:max-w-2xl lg:w-full lg:h-16 lg:rounded-4xl lg:max-w-4xl">
        <div className="w-8 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 lg-w-14 lg:h-14">
          <img
            src="/exlogo.jpg"
            alt="Logo"
            className="w-full h-full mx-1 rounded-full"
          />
        </div>
        <div>
          <Link href={"/about"}>About</Link>
        </div>
        <div>
          <Link href={"/playground"}>Playground</Link>
        </div>
        <div>
          <Link href={"/resource"}>Resource</Link>
        </div>
        <div>
          <Link href={"/work"}>Work</Link>
        </div>

        <div>
          <button className="p-2">Copy this email</button>
        </div>
      </div>
    </nav>
  );
}
