import Image from "next/image";

export default function AboutusComforty() {
  return (
    <div className="text-gray-800">About us
    <div className="flex items-center justify-between gap-5 relative p-10 text-gray-800">
      {/* Left Section */}
      <div className="flex flex-col bg-[#007580] w-[670px] h-[470px] p-8 text-white rounded-md">
        {/* Title */}
        <h1 className="text-[32px] font-bold leading-[39px] mt-10">
          About Us - Comforty
        </h1>

        {/* Description */}
        <p className="text-lg leading-6 mt-10 mb-10">
          At Comforty, we believe that the right chair can transform your space
          and elevate your comfort. Specializing in ergonomic design, premium
          materials, and modern aesthetics, we craft chairs that seamlessly
          blend style with functionality.
        </p>

        {/* Button */}
        <button className="self-start px-8 py-4 bg-[rgba(249,249,249,0.15)] text-white cursor-pointer hover:bg-white hover:text-[#007580] transition-all rounded-md mt-16">
          View Content
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-shrink-0">
        <Image src="/image.png" alt="Chair" width={500} height={670} />
      </div>
    </div>
    </div>
  );
}
