"use client";
import { useToImage } from "@hcorta/react-to-image";
import { Poppins } from "next/font/google";
import Image from "next/image";
import mintyplexLogo from "~/public/mintyplex.png";

type HomeProps = {
  searchParams: {
    [key: string]: string;
  };
};

const poppins = Poppins({
  weight: ["100", "500"],
  display: "swap",
  subsets: ["latin"],
});

export default function Home({ searchParams }: HomeProps) {
  const name = searchParams.name;

  const { ref, isLoading, getPng } = useToImage({
    backgroundColor: "#2063F2",
    quality: 1,
  });

  return (
    <main className="bg-[#1C1E1E]">
      <section className="container flex flex-col items-center justify-center min-h-screen p-3 mx-auto gap-4">
        <Image
          className=""
          src={mintyplexLogo}
          alt={"MintyPlex Logo"}
          height={42}
          width={42}
          quality={100}
        />
        <div
          ref={ref}
          className="w-full max-w-sm py-6 font-semibold text-center text-white bg-[#2063F2] theImage space-y-8"
        >
          <div className="top space-y-3">
            <h2
              className={`max-w-[15rem] mx-auto text-4xl ${poppins.className}`}
            >
              Username Secured!
            </h2>
            <div
              className={`w-full max-w-[15rem] p-3 mx-auto text-xl text-[#2063F2] bg-white rounded-lg box-shadow-custom border border-black light-font font-light`}
            >
              {name ?? "username"}.mtpx
            </div>
          </div>
          <div className="text-[#2063F2] text-4xl bg-white  whitespace-nowrap overflow-hidden font-medium tracking-[-0.075em] py-1">
            <div className="flex items-center justify-center gap-4 -translate-x-2">
              <div className="">THE CLUB!</div>
              <div className="flex-shrink-0 p-[0.35rem] bg-black rounded-full justify-center items-center">
                <Image
                  alt="MintyPlex Logo"
                  src={mintyplexLogo}
                  className="w-4 h-4"
                />
              </div>
              <div>JOIN THE CLUB!</div>
            </div>
          </div>
        </div>
        <button
          className="bg-[#2063F2] text-white rounded-md p-3 w-full max-w-[8rem] flex items-center justify-center transition-all duration-300 active:scale-95 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-1"
          onClick={getPng}
        >
          {isLoading ? <Loader2 /> : "Save Image"}
        </button>
      </section>
    </main>
  );
}

function Loader2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-loader-2 animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
