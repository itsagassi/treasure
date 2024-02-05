"use client"
import React, { useState } from "react"
import BeMine from "@/components/be_mine";
import FuckMe from "@/components/fuck_me";

import { proposalPass, piPass, ihPass, fuckMePass } from "@/components/password";
import Pinter from "@/components/piPage";

export default function Home() {
  const [isBeMine, SetIsBeMine] = useState(false);
  const [isFuckMe, SetIsFuckMe] = useState(false);
  const [isPi, SetIsPi] = useState(false);
  const [isCium, SetIsCium] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    password: ""
  });

  const targetDate = new Date(2024, 1, 5);
  
  const isToday = (target : Date) => {
    const today = new Date();
    console.log(target);
    return (
      target.getDate() === today.getDate() &&
      target.getMonth() === today.getMonth()
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (formData.password) {
      case proposalPass:
        if (isToday(targetDate)) {
          SetIsOpen(true);
          SetIsBeMine(true);
        };
        break;

      case fuckMePass:
        SetIsOpen(true);
        SetIsFuckMe(true);
        break;

      case piPass:
        SetIsOpen(true);
        SetIsPi(true);
        break;

      default:
        SetIsOpen(false);
        break;

    }
  };

  const passwordForm = () => {
    return (
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
    )
  };

  return (
    <main className=" bg-white">
      {!isOpen && passwordForm()}
      {isBeMine && <BeMine />}
      {isFuckMe && <FuckMe />}
      {isPi && <Pinter />}
    </main>
  );
}
