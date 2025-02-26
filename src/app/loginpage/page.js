"use client";
import { z } from "zod";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import * as auth from '@/utils/auth';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Router } from "lucide-react";

const formSchema = z.object({
  email: z.string().min(4, "Email must be at least 4 characters").max(50),
  password: z.string().min(8, "Email must be at least 8 characters").max(50),
});

function LoginPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const [isloggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.userAuth();
  }, []);


  function onSubmit(values) {
    auth.login(values);
  }


  return (
    <div className="h-screen flex">

      <div className="bg-[#F1F0E9] w-[60%] flex items-center pl-16">
        <h1 className="text-5xl text-[#41644A] shadow-zinc-950 font-serif text-justify font-extrabold transition-transform duration-300 ease-in-out hover:scale-110">
          Welcome to the <br />Login Page
        </h1>
      </div>
      <div className="flex justify-center items-center h-screen  w-[40%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 p-6 bg-gray-100 rounded-lg shadow-lg w-96 h-96  transition-transform duration-300 ease-in-out hover:scale-110">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-[#41644A] text-[#F1F0E9]">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
