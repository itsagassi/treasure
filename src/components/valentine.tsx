"use client"
import React, { useState } from "react"
import Image from "next/image";
import photo from "../../public/heart.png"
import location from "../../public/location.png"
import { useTypewriter, Cursor } from "react-simple-typewriter"

export default function Valentine () {
    const [isHundred, SetIsHundred] = useState(false);
    const [isVal, SetIsVal] = useState(false);
    const handle100 = () => {
        SetIsHundred(true);
        SetIsVal(false);
    }
    const handleVal = () => {
        SetIsHundred(false);
        SetIsVal(true);
    }
    
    const [text] = useTypewriter({
        words: [
            "1. annyeong",
            "2. your smile",
            "3. your laugh",
            "4. your personality",
            "5. your eyes",
            "6. your sweet smile",
            "7. your cute tantrum",
            "8. how you always appreciate and care about me",
            "9. how you look in dress <3",
            "10. you're affectionate",
            "11. you're loyal",
            "12. when you copy what i do or say",
            "13. you're always there for me",
            "14. our dumb comfo",
            "15. our stupid laughs",
            "16. you're hot",
            "17. you always choose me",
            "18. also your eyes but when you smile",
            "19. you're hardworking",
            "20. you're extremely kind",
            "21. IH CIUM CIUM",
            "22. your kisses",
            "23. your voice",
            "24. your hair",
            "25. how you don't hide things from me",
            "26. your comfied up self",
            "27. how you makes me feel",
            "28. you show how much you love me",
            "29. your fashion",
            "30. you teaching me about things",
            "31. you're patient with me",
            "32. your stories/tea",
            "33. your daily updates about your day",
            "34. how you always call me at the end of the day",
            "35. how lovely you are",
            "36. how you comforted me",
            "37. our carpool karaoke",
            "38. you're respectful",
            "39. you're clear with your boundaries to other",
            "40. how you talk about me to everyone",
            "41. your jokes",
            "42. you're responsible",
            "43. you care",
            "44. you're weird, my kind of weird",
            "45. how you sleep",
            "46. the way i feel about myself when im with you",
            "47. you stay with me",
            "48. you encourage me",
            "49. you makes me want to be my best self",
            "50. our long hugs",
            "51. our long kisses",
            "52. when you're mad or upset",
            "53. you make me relate to those Taylor songs",
            "54. the way you see things",
            "55. your vision",
            "56. us forever",
            "57. things will always works out",
            "58. how you spend your time wisely",
            "59. your trust me",
            "60. you're forgiving",
            "61. i trust you",
            "62. you understands me",
            "63. your music taste",
            "64. how we can talk about ANYTHING casually",
            "65. you're gentle",
            "66. you have a pure gentle heart",
            "67. never talk bad to me",
            "68. never see me in a bad way",
            "69. you don't immediately jump to conclusions",
            "70. you don't speculate or judge",
            "71. you're forgiving",
            "72. didn't think a second time to do or give things for me",
            "73. you always try to be positive even when you don't feel positive",
            "74. how we hold hands",
            "75. your gentle words",
            "76. you listen",
            "77. you're here",
            "78. you're genuinely funny and cool",
            "79. your love towards cat",
            "80. PIPI",
            "81. you're dependable",
            "82. you're trustworthy",
            "83. you're responsible",
            "84. your voice",
            "85. you always talk things out with me",
            "86. you're open minded",
            "87. you reassure me",
            "88. good girl",
            "89. your KNOWLEDGE cuz damn your pretty and smart and have good personality? DAMN",
            "90. not hiding things from me",
            "91. ELITE MUSIC TASTE",
            "92. when you use my sweater",
            "93. never gives up",
            "94. always trying your best",
            "95. you get jealous",
            "96. how happy and excited you are when you're with me",
            "97. your touches",
            "98. cute things we do (street camera, pinky promises, i love you muah muah)",
            "99. its peaceful",
            "100. i love you"
        ],
        loop: true,
        delaySpeed: 1000,
      })

    return (
        <>
            <div className=" bg-pink-200 text-white h-screen w-screen flex items-center justify-center font-serif flex-col">
                {isHundred && 
                    <div className=" flex justify-center">
                        {text}
                        < Cursor />
                    </div>
                }
                {isVal && 
                    <div className=" flex justify-center">
                        will be filled with our valentine journey on 15th feb!
                    </div>
                }
                <div>
                    <h2 className=" flex justify-center">Happy Valentine&apos;s Day Sweetheart!</h2>
                    <div className=" flex justify-between content-center items-center pt-2">
                        <div onClick={handleVal}>
                            <Image
                                src={photo}
                                height={40}
                                alt="nothing"
                            />    
                        </div>
                        <div onClick={handle100} className=" border-solid border-2 items-center justify-center font-sans font-semibold border-red-500 text-red-500 rounded-full h-10 w-10 flex ">100</div>
                    </div>
                </div>
            </div>
        </>
    )
}