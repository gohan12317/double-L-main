"use client"
import { useState, useRef } from "react"
import gsap from "gsap"

import Image from "next/image";
export default function Navbar() {
      const [Open, setOpen] = useState(false)
      const menuRef = useRef(null)

      const toggleMenu = () => {
        setOpen(!Open)
        if (!Open) {
          gsap.to(menuRef.current, {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.5,
            ease: "power3.inOut"
          })
        } else {
          gsap.to(menuRef.current, {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.5,
            ease: "power3.inOut"
          })
        }
      }
    return(
    <><nav className="navbar fixed bottom-6 left-1/2 -translate-x-1/2 z-50" onClick={toggleMenu}>
        <div className="flex items-center justify-between gap-10 px-6 py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              className="invert"
              src="/images/logo/DoubleLB&W-Logo.png"
              alt="Double L Builders Logo"
              width={28}
              height={28}
              priority />
          </div>

          {/* Center Text */}
          <span className="text-white text-sm tracking-widest font-medium">
            HOME
          </span>

          {/* Menu Icon */}
          <div className="flex flex-col justify-center gap-[4px] cursor-pointer">
            <span className="block w-5 h-[2px] bg-white"></span>
            <span className="block w-5 h-[2px] bg-white"></span>
            <span className="block w-5 h-[2px] bg-white"></span>
          </div>

        </div>
        {/* Menu Overlay */}
      </nav><div ref={menuRef} className="fixed inset-0 bottom- z-[50] flex justify-center bg-black/20 backdrop-blur-xs opacity-0 pointer-events-none">
          <div className="text-white text-2xl font-bold bg-black/80 w-[15%] h-[40%] p-10 justify-center">
            <p>About</p>
            <p>Projects</p>
            <p>Services</p>
            <p>Contact</p>
            <p className="cursor-pointer" onClick={toggleMenu}>
              close
            </p>
          </div>
        </div></>
    )
}