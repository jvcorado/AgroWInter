import Image from "next/image";
import { Button } from "../Button";
import Hero from "../../public/9XflfL04.png";

export const Section5 = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row text-800 p-10 lg:p-20 gap-5">
      <div className="m-auto ">
        <Image
          src={Hero}
          alt="hero-1"
          className="lg:w-9/12 rounded-lg shadow-2xl"
        />
      </div>
      <div className="flex flex-col gap-6 items-start">
        <div className="text-left flex flex-col gap-5 items-start">
          <h1 className="text-5xl lg:text-6xl font-bold mb-1">
            Create the screens
          </h1>
          <h1 className="text-5xl lg:text-6xl text-primary font-bold mb-3">
            your visitors deserve to see
          </h1>
          <p className="text-700 line-height-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full lg:w-4/12  flex items-start justify-start">
          <Button bg="bg-gradient-card-blue"></Button>
        </div>
      </div>
    </div>
  );
};
