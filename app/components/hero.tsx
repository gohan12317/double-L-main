"use client"
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react"


export default function Hero() {
  return (
    <div className="hero flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-background relative">
      <div className="absolute inset-0 p-10 md:p-20 max-w-[100%] ">
        <Image
          src="/images/sample/modern-house1.jpg"
          alt="Background"
          fill
          className="inset-0 object-cover"
          priority
        />
      </div>
      <main className="items-center justify-between sm:items-start relative z-10">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-s text-4xl sm:text-5xl md:text-5xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50 mt-50">
            Building Quality, Creating Value
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-100">
            Building Excellence Since 2010 
          </p>
        </div>
      </main>
    </div>
  );
}
