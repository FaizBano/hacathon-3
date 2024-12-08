import React from "react";
import Image from "next/image";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function Hero() {
  return (
    
    <div className="w-[1740px] h-[850px] bg-[#F0F2F3]">
      <div className=" w-[557px] h-[337px] px-[70px] py-[220px]">
        <div className="font-inter font-normal size-14 text-[#272343]">
          <h1 className=" text-nowrap font-semibold"> Welcome to chairy</h1>
        </div>
        <div className="absolute w-[557px] h-[198px] left-[70px] top-[267px] font-inter font-bold text-[60px] leading-[66px] capitalize text-[#272343]">
          <p> Best Furniture Collection for your interior.</p>
        </div>
        <button
          className="absolute flex flex-row justify-center items-center p-[14px_24px] gap-[20px] 
         w-[171px] h-[52px] left-[70px] top-[514px] bg-[#029FAE] rounded-[8px] text-[#FFFF]"
        >
          Shop Now <IoIosArrowRoundForward />

        </button>

        <div className="absolute w-[1740px] h-[850px] left-[777px] top-[115px] bg-[#F0F2F3] bg-cover ">
          <Image src="/product.png" width={434} height={585} alt="product" />
        </div>
        
        <div className="absolute flex flex-row justify-between items-center p-0 gap-[106px] w-[1321px] h-[139px] left-[300px] top-[1107px]">


        <Image src="/Logo.png" width={85} height={87} alt="logo" />
        <Image src="/Logo1.png" width={107} height={109} alt="logo1" />
        <Image src="/Logo2.png" width={135} height={130} alt="logo2" />
        <Image src="/Logo3.png" width={63} height={65} alt="logo3" />
        <Image src="/Logo4.png" width={85} height={87} alt="logo4" />
        <Image src="/Logo5.png" width={98} height={101} alt="logo5" />
        <Image src="/Logo6.png" width={85} height={87} alt="logo6" />
        <Image src="/Logo7.png" width={113} height={115} alt="logo7" />

        </div>
        <div>
        <div
  className="absolute flex flex-row justify-between items-center px-[300px] gap-[846px] w-[1920px] h-[44px] left-0 top-0">
    <div
  className="mx-auto w-[286px] h-[35px] font-inter text-[32px] leading-[110%] capitalize text-[#272343] flex-none order-0 flex-grow-0">
  Featured Products
</div>
<div>
<div className="absolute inset-x-0 top-0 bottom-[17.24%] bg-/image.png rounded-[6px]">
</div>   
            <Image src="/image.png"alt="image" width={312}height={312}/>
            <br/>            
          <h1>$20</h1> 
          <Image src="/image.png"alt="image" width={312}height={312}/>
            <br/>            
          <h1>$20</h1>  
        </div>


</div>

        </div>

      </div>
    </div>

  );
}
