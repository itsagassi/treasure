import Image from "next/image";
import photo from "../../public/HaiRosie.png"

export default function Home() {
  return (
    <main className=" bg-white">
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
      <div className=" h-screen bg-gradient-to-b from-white to-black">

      </div>
      <div className=" h-screen bg-black">

      </div>

    </main>
  );
}
