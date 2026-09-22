import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/heroBg.gif"
        alt="Hero background"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="absolute inset-x-0 top-0 flex flex-col items-center mt-24">
        <h2 className="font-bold text-7xl font-game">Start Your</h2>
        <h2
          className="font-bold text-8xl font-game text-yellow-400"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
        >
          Coding Quest!
        </h2>
        <h2 className=" mt-5 font-game text-3xl " >Beginner friendly courses and projects</h2>
        <Button variant={'pixel'} className="font-game text-3xl p-6 rounded mt-7 " >Get Started</Button>
      </div>
    </div>
  );
}

export default Hero;