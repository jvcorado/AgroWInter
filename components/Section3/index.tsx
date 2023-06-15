//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import { Button } from "../Button";
import Image from "next/image";
import img1 from "../../public/pOST 1.jpg";
import img2 from "../../public/pOST 2.jpg";
import img3 from "../../public/pOST 3.jpg";
import wave from "../../public/wave (6).svg";

export const Section3 = () => {
  return (
    <>
      <div className="">
        <div className="w-full lg:h-80">
          <Image src={wave} alt="" className="w-full"></Image>
        </div>
        <div className="p-10 lg:px-40 lg:mt-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            <SwiperSlide className="bg-gradient-card rounded-md ">
              <Image src={img1} alt="" className="rounded-t-md" />
              <div className="p-5 lg:p-10">
                <h1 className="text-card font-bold text-xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, itaque.
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  sunt consequuntur obcaecati ratione nam veritatis commodi
                  porro mollitia ipsa est!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-gradient-card rounded-md ">
              <Image src={img2} alt="" className="rounded-t-md" />
              <div className="p-5 lg:p-10">
                <h1 className="text-card font-bold text-xl ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, itaque.
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  sunt consequuntur obcaecati ratione nam veritatis commodi
                  porro mollitia ipsa est!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-gradient-card rounded-md ">
              <Image src={img3} alt="" className="rounded-t-md" />
              <div className="p-5 lg:p-10">
                <h1 className="text-card font-bold text-xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, itaque.
                </h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  sunt consequuntur obcaecati ratione nam veritatis commodi
                  porro mollitia ipsa est!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="m-auto px-10 w-full lg:w-4/12 lg:px-0  flex items-center justify-center">
          <Button bg="bg-gradient-card-blue"></Button>
        </div>
      </div>
    </>
  );
};
