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
import React, { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    password: ""
  });

  const proposalPass = "this love";
  const piPass = "31415926535897932384246";
  const [isBeMine, SetIsBeMine] = useState(false);
  const targetDate = new Date(2024, 1, 5);

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password === proposalPass && isToday(targetDate)) {
      SetIsBeMine(true);
    } else {
      SetIsBeMine(false);
    }
  };

  const isToday = (target : Date) => {
    const today = new Date();
    console.log(target);
    return (
      target.getDate() === today.getDate() &&
      target.getMonth() === today.getMonth() &&
      target.getFullYear() === today.getFullYear()
    );
  };

  return (
    <main className=" bg-white">
      {!isBeMine && (
        <>
          <div className=" bg-white h-96 w-screen grid justify-center content-center">
            <form onSubmit={handleSubmit}>
              <label className=" grid justify-center content-center">
                <p className=" flex justify-center p-2">enter the keyword</p>
                <input
                  className=" pl-2 font-white rounded-lg border border-black"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </label>
              <br />
            </form>
          </div>
        </>
      )}
      {isBeMine && (
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
      )}
    </main>
  );
}
