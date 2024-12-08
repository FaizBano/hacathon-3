import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div className="w-[1920] h-[45]">
        <div className="flex flex-row justify-between items-center px-[300px] py-[14px] gap-[798px] w-[1920px] h-[45px] bg-[#272343]">

        <div className="flex items-center w-[255px] h-16 font-regular size-[13] text-[#FFFF] m-10 px-10">
          <h1 className="text-nowrap font-semibold"> Free shipping on all orders over $50</h1>
        </div>
        <div className="flex gap-5 m-10 px-10">
          <select className="bg-[#272343] text-[#FFFF]">
            <option> Eng</option>
          </select>
          <h1 className="text-[#FFFF]"> Faq</h1>
          <Image src="/Vector.png" width={14} height={14} alt="vector" />
          <p className=" text-[#FFFF] text-nowrap">Need Help</p>
        </div>
      </div>

      <div className="w-[1920px] h-[74px]  flex flex-row justify-between items-center gap-20 bg-[#F0F2F3]  ">
        <div className="w-[166px] h-40px  flex flex-1 justify-between items-center ">
          <div className="flex justify-between items-center gap-x-20 ">
            <Image src="/logoIcon.png" width={40} height={40} alt="logoIcon" />
            <div>
            <h1 className="size-[26px] font-bold font-inter "> Comforty</h1>
            </div>
          
           <div className="w-[1920px] h-[44px] flex flex-row justify-between items-center gap-x-20">
            <div className=" flex flex-row justify-between items-center gap-10">
              <Image src="/cart.png"
                width={22}
                height={22}
                alt="cart"
              />
            
            <div className="flex gap-10">
              <h2>Cart</h2>
            
            <div>
              <Image
                className=""
                src="/No.png"
                width={22}
                height={22}
                alt="number"
              />
              </div>
              </div>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <div className="m-x-20 w-[1920px] h-[74px] flex flex-1 justify-start items-center gap-x-20   ">
        <div className="">
        <ul className="ml-28  w-[1920px]  flex gap-10 text-xl  justify-start items-center gap-x-10  ">
          <Link href="/"> <li> Home</li></Link>
          <Link href="/Shop"><li> Shop</li></Link>
          <Link href="/Project"><li> Project</li></Link>
          <Link href="/Page"><li> Page</li></Link>
          <Link href="/About"><li> About</li></Link>
        </ul>
        </div>

        <div className=" flex flex-row justify-center items-center gap-3 w-[57px] h-[15px] font-inter font-normal text-[14] text-[#636270]">
          <h1> Contact</h1>
          <p className="font-semibold whitespace-nowrap"> 808-555-0111</p>
        </div>
      </div>
    </div>
  );
}
