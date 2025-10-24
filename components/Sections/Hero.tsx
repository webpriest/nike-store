'use client'

import { shoes, statistics } from "@/constants"
import Button from "../Layouts/Button"
import ShoeCard from "./ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(shoes[0].bigShoe)
  console.log(bigShoeImg)
  
  return (
    <div
      id="home" 
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen items-center max-container gap-10 xl:gap-0"
    >
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-red-600">Our Summer Collections</p>
        <h1 className="mt-10 font-oswald text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 pl-2">The New Arrival</span><br />
          <span className="inline-block text-red-600 mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-gray-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconUrl="/assets/icons/arrow-right.svg" />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col justify-center items-start">
              <h2 className="text-4xl font-oswald font-bold">{stat.value}</h2> 
              <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-gray-100 bg-hero bg-cover bg-center">
        <img 
          src={bigShoeImg} 
          alt="hero shoe" 
          width={610} 
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex ms:gap-6 gap-4 absolute -bottom-[15%] sm:left-[10%]">
          {shoes.map((shoe: any, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                bigShoeImg={bigShoeImg}
                changeBigShoe={(shoe) => setBigShoeImg(shoe)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero