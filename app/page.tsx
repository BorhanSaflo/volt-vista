import Link from "next/link";

export default function page() {
  return (
    <section className="bg-[#000] relative h-screen w-screen">
      <div className="z-0 top-0 right-0 absolute h-[100%] w-[100%] sm:w-[60%] opacity-40 sm:opacity-90">
        <div className="relative h-full w-full overflow-hidden">
          <video muted loop autoPlay className="z-0 object-cover h-full w-full">
            <source src="./videos/video.mp4" type="video/mp4" />
          </video>
          <div className="z-10 w-full h-full top-0 left-0 absolute bg-gradient-to-t sm:bg-gradient-to-r from-[#000] via-[#0000009e] to-[#0000006a]" />
        </div>
      </div>
      <div
        className={
          "hidden sm:block z-1 absolute w-[45%] h-screen top-0 left-0 opacity-10 bg-gradient-to-r from-green-600 to-[#000]"
        }
      />
      <div
        className="z-10 flex gap-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:translate-y-0 sm:top-[35%] sm:left-[15%] w-[90%]
sm:max-w-[600px]">
        <div className="flex flex-col justify-center gap-4 items-center text-center">
          <h1 className="text-[#bae2c6] font-bold sm:text-[5rem] text-5xl">Volt Vista</h1>
          <h2 className="text-[#BFDBC8] font-semibold sm:text-[1.6rem] text-lg">
            Take{" "}
            <span className="font-black bg-gradient-to-br from-green-200 via-green-300 to-green-400 text-transparent bg-clip-text">
              Control{" "}
            </span>
            of Your Energy
          </h2>
          <p className={"text-sm text-[#BFDBC8] mb-2"}>
            An energy monitoring and management solution tailored for homeowners.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <Link
              className="bg-[#BFDBC8] rounded-md px-6 py-2 text-green-950 font-semibold"
              href="/dashboard">
              Dashboard
            </Link>
            <Link
              className="bg-green-800 rounded-md px-6 py-2 text-[#eef1ef] font-semibold"
              href="#">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
