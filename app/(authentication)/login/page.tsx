"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import microsoftLogo from "/public/images/microsoft-logo.svg";
import googleLogo from "/public/images/google-logo.svg";

import Link from "next/link";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@maxHR/components/ui/form";
import { Input } from "@maxHR/components/ui/input";
import { useForm } from "react-hook-form";
import { Button, buttonVariants } from "@maxHR/components/ui/button";
import Icons from "@maxHR/components/Icons";
import PasswordInput from "@maxHR/components/PasswordInput";
import Image from "next/image";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email("Please enter a valid email"),
  // .refine(async (e) => {
  //   // Where checkIfEmailIsValid makes a request to the backend
  //   // to see if the email is valid.
  //   return await checkIfEmailIsValid(e);
  // }, "This email is not in our database"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .max(50, { message: "password must not be more than 50 characters long." }),
});

const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const form = useForm({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="text-slate-900 w-full lg:w-2/3 mx-auto flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-slate-900 dark:text-slate-200">
        Login
      </h1>

      <Form {...form}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full mb-5">
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full mb-5">
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl className="relative">
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mt-5 w-full" type="submit">
          Login
        </Button>
      </Form>
      <div className="w-full mt-10 grid grid-cols-12 items-center text-gray-400">
        <hr className="border-gray-400 col-span-5" />
        <p className="text-center text-sm col-span-2">OR</p>
        <hr className="border-gray-400 col-span-5" />
      </div>

      <div className="w-full mt-10 flex flex-col 2xl:flex-row gap-8 items-center">
        <Button
          variant="ghost"
          className="flex items-center w-full gap-3 dark:bg-white bg-slate-500 text-white/75 dark:text-slate-700 hover:bg-slate-500/75 hover:text-white duration-300"
        >
          <Image src={googleLogo} width={18} height={18} alt="microsoft" />{" "}
          Signin with Google
        </Button>
        <Button
          variant="outline"
          className="flex items-center w-full gap-3 dark:text-white text-slate-700"
        >
          {/* <i className="ri-microsoft-fill ri-2x text-cyan-400" /> */}
          <Image
            src={microsoftLogo}
            width={18}
            height={18}
            alt="microsoft"
          />{" "}
          Signin with Microsoft
        </Button>
      </div>

      <div className="w-full mt-10 flex flex-col items-left gap-4">
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-slate-500/75 dark:text-white dark:hover:text-white/75 cursor-pointer font-semibold duration-300"
        >
          Forgot your password?
        </Link>

        <div className="w-full grid grid-cols-1">
          <hr className="border-gray-400" />
        </div>

        <div className="w-full flex justify-between items-center">
          <p className="text-slate-500">Don&apos;t have and account yet?</p>
          <Link
            href="/"
            className="text-sm text-primary-500 hover:text-primary-500/75 cursor-pointer font-semibold duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
function checkIfEmailIsValid(e: string): unknown {
  throw new Error("Function not implemented.");
}
