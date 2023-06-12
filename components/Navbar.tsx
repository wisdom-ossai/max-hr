import { getServerSession } from "next-auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const loadSession = async () => {
      try {
        const session = await getServerSession();
        if (session) {
          setSession(session);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadSession();
  }, [[]]);

  return (
    <nav className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/">MaxHR</Link>

        <div className="md:hidden">
          <ThemeToggler />
        </div>
        <div className="hidden md:flex gap-4">
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>

          {session ? (
            <>
              <Link
                href="/dashboard"
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>

              <Button onClick={() => console.log("signin")}>Sign out</Button>
            </>
          ) : (
            <Link
              href="/signin"
              className={buttonVariants({ variant: "default" })}
              onClick={() => console.log("signin")}
            >
              Sign in
            </Link>
          )}
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
