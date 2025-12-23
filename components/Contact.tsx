"use client";
import React, { FunctionComponent } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Contact: FunctionComponent = () => {
  const form = useForm();
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-0">
      {/* Heading */}
      <div className="mb-3 mt-3 text-center">
        <p
          className="font-bold text-3xl sm:text-4xl md:text-5xl inline-block"
          style={{
            background: "linear-gradient(180deg, #F1E821, #23C0AD,#487AFA )",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </p>
      </div>
      <hr />

      {/* Social icons */}
      <div className="m-5 flex justify-center gap-4 sm:gap-6 flex-wrap">
        <Link
          className="hover:scale-125 transition ease-in-out"
          href="https://x.com/ecelliitbhu"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter className="text-blue-600 text-3xl hover:text-blue-600/75 cursor-pointer transition ease-in-out" />
        </Link>
        <Link
          className="hover:scale-125 transition ease-in-out"
          href="https://www.instagram.com/ecelliitbhu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-pink-600 text-3xl hover:text-pink-600/75 cursor-pointer transition ease-in-out" />
        </Link>
        <Link
          className="hover:scale-125 transition ease-in-out"
          href="https://www.linkedin.com/company/ecelliitbhu/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-blue-600 text-3xl hover:text-blue-600/75 cursor-pointer transition ease-in-out" />
        </Link>
        <Link
          className="hover:scale-125 transition ease-in-out"
          href="https://www.youtube.com/c/ecelliitbhu"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube className="text-red-600 text-3xl hover:text-red-600/75 cursor-pointer dark:text-gray-300 dark:hover:text-gray-300/75 transition ease-in-out" />
        </Link>
      </div>

      {/* Form */}
      <div className="mt-11 mx-auto w-full max-w-[700px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full sm:w-4/5 md:w-2/3 mx-auto space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-sm sm:text-base md:text-lg"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-sm sm:text-base md:text-lg"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-sm sm:text-base md:text-lg"
                      placeholder="Enter your phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="text-sm sm:text-base md:text-lg min-h-[120px]"
                      placeholder="Enter your message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-full sm:w-[220px] text-sm sm:text-base md:text-lg">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Founder">Founder</SelectItem>
                        <SelectItem value="Investor">Investor</SelectItem>
                        <SelectItem value="Sponsor">Sponsor</SelectItem>
                        <SelectItem value="Speaker">Speaker</SelectItem>
                        <SelectItem value="Student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="w-full bg-[#23C0AD] hover:bg-[#1d9e8f] text-base sm:text-lg md:text-xl font-semibold py-4 sm:py-5"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>

      {/* Address */}
      <div className="text-center mx-4 sm:mx-10 md:mx-24 my-7">
        <span>📍</span>
        <p
          className="font-bold text-xl sm:text-2xl md:text-3xl inline-block"
          style={{
            background: "linear-gradient(90deg, #F1E821, #23C0AD,#487AFA )",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Address
        </p>
        <p className="mt-2 text-sm sm:text-base">
          Indian Institute of Technology (Banaras Hindu University), Varanasi,
          India, PIN: 221005
        </p>
      </div>
    </div>
  );
};

export default Contact;
