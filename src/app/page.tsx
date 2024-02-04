"use client"
import Image from "next/image";
import photo from "../../public/HaiRosie.png"
import Flashback from "@/components/flashback";
import React, { useState } from "react"

export default function Home() {
  const [formData, setFormData] = useState({
    password: ""
  });

  const rightPass = "this love"
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

    if (formData.password === rightPass && isToday(targetDate)) {
      SetIsBeMine(true);
    } else {
      SetIsBeMine(false);
    }
  };

  const isToday = (target : Date) => {
    const today = new Date();
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
        </>
      )}
    </main>
  );
}
