import Image from "next/image";
import { Button } from "../Button";
import wave from "../../public/wave (5).svg"
import wave2 from "../../public/wave (7).svg"

export const Section4 = ()=>{
  return (
     <div className=" bg-gradient-card-2">
        <div className="w-full">
              <Image src={wave2} alt="" className="w-full"></Image>
        </div>
        <div className=" flex flex-col items-center justify-center gap-16">

            <h2 className="text-900 text-6xl font-bold text-center text-card-2">Principais Benefícios</h2>

            <div className="w-full p-10 lg:px-40 grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">

                <div className="bg-gradient text-white grid-cols-12 p-10 rounded-xl shadow-2xl  hover:scale-110 transition-transform">
                    <span className="p-3 shadow-xl mb-3 inline-block rounded-lg bg-white">
                        <i className="pi pi-money-bill icon" style={{fontSize:'40px'}}></i>
                    </span>
                    <div  className="flex flex-col">
                        <span className="text-900 text-xl mb-3 font-medium ">Fast & Global Support</span>
                        <span className="text-700 leading-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                    </div>
                </div>
                <div className="bg-gradient text-white grid-cols-12 p-10 rounded-xl shadow-2xl  hover:scale-110 transition-transform">
                    <span className="p-3 shadow-xl mb-3 inline-block rounded-lg bg-white">
                        <i className="pi pi-money-bill icon" style={{fontSize:'40px'}}></i>
                    </span>
                    <div  className="flex flex-col">
                        <span className="text-900 text-xl mb-3 font-medium ">Fast & Global Support</span>
                        <span className="text-700 leading-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                    </div>
                </div>
                <div className="bg-gradient text-white grid-cols-12 p-10 rounded-xl shadow-2xl  hover:scale-110 transition-transform">
                    <span className="p-3 shadow-xl mb-3 inline-block rounded-lg bg-white">
                        <i className="pi pi-money-bill icon" style={{fontSize:'40px'}}></i>
                    </span>
                    <div  className="flex flex-col">
                        <span className="text-900 text-xl mb-3 font-medium ">Fast & Global Support</span>
                        <span className="text-700 leading-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                    </div>
                </div>
            
                <div className="bg-gradient text-white grid-cols-12 p-10 rounded-xl shadow-2xl  hover:scale-110 transition-transform">
                    <span className="p-3 shadow-xl mb-3 inline-block rounded-lg bg-white">
                        <i className="pi pi-money-bill icon" style={{fontSize:'40px'}}></i>
                    </span>
                    <div  className="flex flex-col">
                        <span className="text-900 text-xl mb-3 font-medium ">Fast & Global Support</span>
                        <span className="text-700 leading-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                    </div>
                </div>
                <div className="bg-gradient text-white grid-cols-12 p-10 rounded-xl shadow-2xl  hover:scale-110 transition-transform">
                    <span className="p-3 shadow-xl mb-3 inline-block rounded-lg bg-white">
                        <i className="pi pi-money-bill icon" style={{fontSize:'40px'}}></i>
                    </span>
                    <div className="flex flex-col">
                        <span className="text-900 text-xl mb-3 font-medium ">Fast & Global Support</span>
                        <span className="text-700 leading-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                    </div>
                </div>
                <div className="bg-gradient text-white grid-cols-12 p-10 rounded-xl shadow-2xl  hover:scale-110 transition-transform">
                    <span className="p-3 shadow-xl mb-3 inline-block rounded-lg bg-white">
                        <i className="pi pi-money-bill icon" style={{fontSize:'40px'}}></i>
                    </span>
                    <div  className="flex flex-col">
                        <span className="text-900 text-xl mb-3 font-medium ">Fast & Global Support</span>
                        <span className="text-700 leading-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                    </div>
                </div>
            </div>
            <div className="w-4/12  flex items-center justify-center">
                <Button></Button>
            </div>
            <div className="w-full h-80">
                <Image src={wave} alt="" className="w-full"></Image>
            </div>
        </div>
     </div>
  );
}
  