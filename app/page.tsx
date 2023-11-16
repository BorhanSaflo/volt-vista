import Link from "next/link";

export default function page() {
  return (
    <section className="bg-[#000] relative h-screen w-screen">
      <div className="z-0 top-0 right-0 absolute h-[100%] w-[100%] lg:w-[60%] opacity-40 lg:opacity-90">
        <div className="relative h-full w-full overflow-hidden">
          <video src="./videos/video.mp4" playsInline muted loop autoPlay controls={false} className="z-0 object-cover h-full w-full" />
          <div className="z-10 w-full h-full top-0 left-0 absolute bg-gradient-to-t lg:bg-gradient-to-r from-[#000] via-[#0000009e] to-[#0000006a]" />
        </div>
      </div>
      <div
        className={
          "hidden lg:block z-1 absolute w-[45%] h-screen top-0 left-0 opacity-10 bg-gradient-to-r from-green-600 to-[#000]"
        }
      />
      <span className="z-10 absolute top-5 right-5 bg-[#BFDBC8] text-green-950 text-xs font-black p-1 rounded-md opacity-70">
        Prototype
      </span>
      <div
        className="z-10 absolute w-full lg:w-auto p-10 top-1/2 left-1/2 lg:top-1/2 lg:left-10 3xl:left-60 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0">
        <div className="flex flex-col justify-center gap-3 w-full items-center lg:items-start text-center lg:text-left lg:max-w-[350px]">
          <h1 className="text-[#bae2c6] font-bold lg:text-[5rem] text-5xl">Volt Vista</h1>
          <h2 className="text-[#BFDBC8] font-semibold lg:text-[1.5rem] text-lg">
            Take{" "}
            <span className="font-extrabold bg-gradient-to-br from-green-300 via-green-400 to-green-500 text-transparent bg-clip-text">
              Control{" "}
            </span>
            Over Your Energy
          </h2>
          <p className={"text-sm text-[#BFDBC8] mb-4"}>
            An energy monitoring and management solution tailored for homeowners.
          </p>
          <div className="flex gap-4 items-center flex-wrap justify-center lg:justify-start">
            <Link
              className="bg-[#BFDBC8] rounded-md px-6 py-2 text-green-950 font-semibold"
              href="/dashboard">
              Dashboard
            </Link>
            <Link
              className="bg-green-700 rounded-md px-6 py-2 text-[#eef1ef] font-semibold"
              href="#">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section >
  );
}
