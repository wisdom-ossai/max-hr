import { Button, buttonVariants } from "@maxHR/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import heroImage from "/public/images/hero.svg";

export default function Home() {
  return (
    <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
      <h1 className="text-black font-bold text-5xl text-center lg:text-left dark:text-white/75">
        <span className="text-slate-400 text-left font-semibold text-2xl">
          The best system to
        </span>
        <br />
        Maximize HR Automation
      </h1>

      <p className="max-wl-xl lg:text-left max-w-lg text-base text-center">
        Your one stop platform for streamlining and automating all
        organization&apos;s Human Resource processes.
      </p>

      <div className="flex items-center gap-3">
        <Link
          href="/register"
          className={buttonVariants({ variant: "default" })}
        >
          Try for Free
        </Link>
        <Link href="/login" className={buttonVariants({ variant: "outline" })}>
          Book a demo
        </Link>
      </div>

      <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
        <Image
          priority
          className="img-shadow"
          quality={100}
          style={{ objectFit: "contain" }}
          fill
          src={heroImage}
          alt="typewriter"
        />
      </div>
    </div>
  );
}
