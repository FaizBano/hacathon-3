import Image from "next/image";

export default function HotProduct() {
  return (
    <header className="container mx-auto px-4 py-8 lg:py-16">
      <div className="relative grid grid-cols-1 md:grid-cols-[auto_2fr] mx-2">
        {/* Rotated Text */}
        <div className="relative flex items-center">
          <div className="absolute transform -rotate-90 origin-bottom-left text-nowrap  text-lg md:text-xl lg:text-2xl font-medium tracking-wider text-zinc-900 text-center ">
            EXPLORE NEW AND POPULAR STYLES
          </div>
        </div>

        {/* Image and Grid Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Main Image */}
          <div className="relative w-full md:w-[48%] flex-shrink-0">
            <Image
              src="/image2.png"
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Secondary Images Grid */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/image3.png"
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/image.png"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/p2.png"
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/image.png"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
