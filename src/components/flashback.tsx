import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Flashback() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.to(sectionRef.current, {
            translateX: "-500vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=2000",
                scrub: 0.6,
                pin: true
            }
        })

        return () => {
            pin.kill()
        }
    }, [])

    return (
        <section className=" overflow-hidden">
            <div ref={triggerRef}>
                <div className=" h-screen w-[600vw] flex flex-row relative" ref={sectionRef}>
                    <div className=" h-screen w-screen bg-black grid justify-center content-center text-white ">
                        <p>let&apos;s</p>
                        <p className=" font-serif font-bold font">REWIND...</p>
                    </div>
                    <div className=" h-screen w-[400vw] bg-gradient-to-r from-black to-white"></div>
                    <div className=" h-screen w-screen bg-white"></div>
                </div>
            </div>
        </section>
    )
}
