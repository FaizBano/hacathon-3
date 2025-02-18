"use client"
import Link from "next/link";
import Image from "next/image";


 type Product = {
   id: number;
   title: string;
   price: number;
   image: string;
   originalPrice?: number;
   isNew?: boolean;
   isSale?: boolean;
 };

 const products: Product[] = [
   { id: 1, 
     title: "Library Stool Chair",
      price: 20,
       image: "/image.png"
      },
   {
     id: 2,
     title: "Vintage Armchair",
     price: 40,
     image: "/image1.png",
     originalPrice: 60,
   },
   { id: 3, title: "Ergonomic Office Chair", 
     price: 50, image: "/image2.png" },
   { id: 4, title: "Modern Dining Chair",
      price: 35, image: "/image2.png" },
   {
     id: 5,
     title: "Reclining Lounge Chair",
     price: 60,
     image: "/image3.png",
     isSale: true,
   },
   {
     id: 6,
     title: "Adjustable Desk Chair",
     price: 25,
     image: "/wood1.png",
     isNew: true,
   },
   { id: 7, title: "Classic Bar Stool",
      price: 30,
       image: "/wood.png" },
   {
     id: 8,
     title: "Sleek High Chair",
     price: 15,
     image: "/pp.png",
     isSale: true,
   },
   { id: 9, title: "Foldable Outdoor Chair", 
     price: 10,
      image: "/image.png" },
   {
     id: 10,
     title: "Leather Recliner Chair",
     price: 150,
     image: "/p1.png",
     isSale: true,
     originalPrice: 200,
   },
 ];


 export default function ProductList() {
   return (
     <div className="container mx-auto px-4 py-10">
       <h1 className="text-3xl font-bold mb-8">Product List</h1>
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {products.map((product) => (
           <div
             key={product.id}
             className="border rounded-lg p-4 shadow hover:shadow-lg transition"
           >
             <Link href={`/product/${product.id}`}>
               <Link href={"/id"}>
                 <Image
                   src={product.image}
                   alt={product.title}
                   width={300}
                   height={300}
                   className="rounded-lg"
                 />
                 <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                 <div className="flex items-center space-x-2 mt-2">
                   <p className="text-green-600 text-lg font-bold">
                     ${product.price}
                   </p>
                   {product.originalPrice && (
                     <p className="text-gray-500 line-through text-sm">
                       ${product.originalPrice}
                     </p>
                   )}
                 </div>
                 {product.isSale && (
                   <span className="inline-block bg-red-500 text-white px-2 py-1 text-xs rounded mt-2">
                     On Sale
                   </span>
                 )}
                 {product.isNew && (
                   <span className="inline-block bg-blue-500 text-white px-2 py-1 text-xs rounded mt-2 ml-2">
                     New Arrival
                   </span>
                 )}
               </Link>
             </Link>
           </div>
         ))}
       </div>
     </div>
   );
  }