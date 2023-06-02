import Image from "next/image";
import { Button } from "../Button";
import Hero from "../../public/posso-vender-na-internet-como-pessoa-fisica-removebg-preview.png"

export const Section5 = ()=>{
  return (
    <div className="flex  text-800  px-40 pt-20">
        <div className="">
          <Image src={Hero} alt="hero-1" className="h-full"/>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <div className="text-center md:text-left flex flex-col gap-5 items-start">
              <h1 className="text-6xl font-bold mb-1">Create the screens</h1>
              <h1 className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</h1>
              <p className="text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="w-4/12  flex items-center justify-center">
               <Button></Button>
          </div>
        </div>
    </div>
  );
}
  