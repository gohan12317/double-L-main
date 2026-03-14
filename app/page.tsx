"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Parallax() {

  useEffect(() => {
    gsap.to(".image", {
      y: -150,
      scrollTrigger: {
        trigger: ".image",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  }, [])

  return (
    <section className="h-[150vh] flex items-center justify-center bg-background">
      <img className="image w-[500px]" src="/images/sample/637904371_904695925680833_6514575791836600093_n.jpg" alt="Logo" />
    </section>
  )
}