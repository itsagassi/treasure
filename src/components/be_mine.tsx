"use client"
import Image from "next/image";

import photo from "../../public/HaiRosie.png"
import first from "../../public/first.png"
import second from "../../public/second.png"
import third from "../../public/third.png"
import fourth from "../../public/fourth.png"
import fifth from "../../public/fifth.png"
import sixth from "../../public/sixth.png"

import Flashback from "@/components/flashback";

export default function beMine() {
    return (
        <>
          <div className=" bg-white w-screen h-screen grid justify-center content-center">
            <div>
              <Image
                src={photo}
                width={118}
                height={33}
                alt="nothing"
              />
            </div>
          </div>
          <div className=" h-screen bg-white"></div>
          <div className=" h-screen bg-white"></div>
          <div className=" h-screen bg-gradient-to-b from-white to-black grid justify-center content-center">
            <p className=" transform rotate-90 text-black">
              NGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEENG..........................................
            </p>
          </div>
          <div className=" h-screen bg-black"></div>
          <div className=" h-screen w-screen bg-black grid justify-center content-center">
            <h3 className=" text-white">
              before we go forward...
            </h3>
          </div>
          <div className=" text-white h-screen bg-black grid justify-center content-center">
            
          </div>
          <Flashback />
          <div className=" h-screen flex items-center justify-center">
              <div>
                <Image
                  src={first}
                  alt="nothing"
                />
              </div>
          </div>
          <div className=" h-screen flex items-center justify-center">
              <div>
                <Image
                  src={second}
                  alt="nothing"
                />
              </div>
          </div>
          <div className=" h-screen flex items-center justify-center">
              <div>
                <Image
                  src={third}
                  alt="nothing"
                />
              </div>
          </div>
          <div className=" h-screen flex items-center justify-center">
              <div>
                <Image
                  src={fourth}
                  alt="nothing"
                />
              </div>
          </div>
          <div className=" h-screen flex items-center justify-center">
              <div>
                <Image
                  src={fifth}
                  alt="nothing"
                />
              </div>
          </div>
          <div className=" h-screen flex items-center justify-center">
              <div>
                <Image
                  src={sixth}
                  alt="nothing"
                />
              </div>
          </div>
          <p className=" flex items-center justify-center">and moreeeee!!!</p>
          <div className=" h-[300vh] flex flex-col items-center justify-evenly">
            <div>
              <p>there&apos;s a lot more things i want to do</p>
            </div>
            <div>
              <p>and i want to do it with you.</p>
            </div>
            <div>
              <p>To a lot more books, songs,</p>
              <p>stories, times, smiles, tears,</p>
              <p>ngeeeeng, menyalah, taylor,</p>
              <p>bruno, the weeknd, season,</p>
              <p>and more!!!</p>
            </div>
          </div>
          <div>
            <div className=" h-screen flex items-center justify-center">
              <p>I love you rosie,</p> <p className=" font-black pl-1">be mine</p>
            </div>
          </div>
        </>
    )
}