"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function Intro() {

  useEffect(() => {

    const tl = gsap.timeline()

    // intro text
    tl.from(".intro-text", {
      opacity: 0,
      y: 40,
      duration: 1
    })

    // navbar starts below screen
    gsap.set(".navbar", { y: 100 })

    // move intro up + navbar up at same time
    tl.to(".intro-screen", {
      y: "-100%",
      duration: 1,
      ease: "power3.inOut"
    })

    tl.to(".navbar", {
      y: 0,
      duration: 1,
      ease: "power3.inOut"
    }, "<") // "<" means start at same time

  }, [])

  return (
    <div className="intro-screen fixed inset-0 bg-black flex items-center justify-center z-50">
      <h1 className="intro-text text-white text-5xl font-semibold">
        Double L Builders
      </h1>
    </div>
  )
}