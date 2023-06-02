import Image from "next/image";
import { Button } from "../Button";
import Hero from "../../public/banner.jpg"

export const Section6 = ()=>{
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-800  ps-40 bg-gradient">
        <div className="grid-cols-12 md:grid-cols-6 p-6 text-center md:text-left flex items-center">
            <div>
                <h1 className="text-6xl text-white font-bold mb-1">Create the screens</h1>
                <h1 className="text-6xl text-white font-bold mb-3">your visitors deserve to see</h1>
                <p className="mt-0 mb-4 text-700 line-height-3 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="w-7/12  flex items-center justify-center">
                    <Button></Button>
                </div>
            </div>
        </div>
        <div className="grid-cols-12 md:grid-col-6 overflow-hidden">
          <Image src={Hero} alt="hero-1" className="md:ml-auto block h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
        </div>
      
    </div>
  );
}
  