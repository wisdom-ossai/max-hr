"use client";
import Icons from "@maxHR/components/Icons";
import ThemeToggler from "@maxHR/components/ThemeToggler";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import loginSvg from "/public/images/login.svg";
import registerSvg from "/public/images/register.svg";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();
  // console.log(router);
  return (
    <div className="flex h-screen w-full items-center">
      <div className="w-1/2 hidden lg:block h-full bg-primary-300">
        <Image
          priority
          className="img-shadow h-full w-full"
          quality={100}
          src={registerSvg}
          alt="auth"
        />
      </div>
      <div className="w-full lg:w-1/2 h-full bg-white dark:bg-slate-900 flex flex-col items-center justify-center px-10 relative">
        <div className="absolute right-10 top-6">
          <ThemeToggler />
        </div>
        <Link
          href="/"
          className="absolute left-10 top-6 flex gap-2 items-center text-xs"
        >
          <Icons.ArrowLeft size={14} /> Go back home
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
