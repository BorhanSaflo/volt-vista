import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section className="bg-[#000] relative h-screen w-screen">
      <span className="z-10 absolute top-5 left-5 bg-[#a3e0b7] text-green-950 text-xs lg:text-sm font-black p-1 rounded-md opacity-60 cursor-default">
        This App Is a Prototype
      </span>
      <div className="absolute top-0 right-0 h-screen w-screen lg:w-[55%]">
        <video
          src="./videos/video.mp4"
          playsInline
          muted
          loop
          autoPlay
          controls={false}
          className="object-cover h-full w-full opacity-50 lg:opacity-100"
        />
        <div className="w-full h-full top-0 left-0 absolute bg-gradient-to-t lg:bg-gradient-to-r from-[#000] via-[#000000b4] to-[#00000074]" />
      </div>
      <div
        className={
          "absolute top-0 left-0 w-full lg:w-[70%] h-screen opacity-5 lg:opacity-10 bg-gradient-to-b lg:bg-gradient-to-r from-green-600 to-transparent"
        }
      />
      <Image
        className="absolute -left-30 w-full lg:w-2/3 h-full hidden lg:block"
        src="/images/glow-homepage.png"
        alt=""
        width="100"
        height="1000"
        draggable={false}
        priority
      />
      <div className="absolute w-full lg:w-auto p-10 top-1/2 left-1/2 lg:top-1/2 lg:left-10 3xl:left-60 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0">
        <div className="flex flex-col justify-center gap-3 w-full items-center lg:items-start text-center lg:text-left lg:max-w-[350px]">
          <h1 className="text-[#bae2c6] font-bold lg:text-[5rem] text-5xl">Volt Vista</h1>
          <h2 className="text-[#BFDBC8] font-semibold lg:text-[1.5rem] text-lg">
            Take{" "}
            <span className="font-extrabold bg-gradient-to-br from-green-300 via-green-400 to-green-500 text-transparent bg-clip-text">
              Control{" "}
            </span>
            Over Your Energy
          </h2>
          <p className={"text-base lg:text-lg text-[#BFDBC8] mb-2 max-w-[320px]"}>
            An energy monitoring and management application tailored for homeowners.
          </p>
          <div className="flex gap-4 items-center flex-wrap justify-center lg:justify-start">
            <Link
              className="bg-green-400 rounded-md px-6 py-2 text-green-950 font-semibold"
              href="/dashboard">
              Dashboard
            </Link>
            <Link
              className="bg-[#BFDBC8] rounded-md px-6 py-2 text-green-950 font-semibold"
              href="#">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
