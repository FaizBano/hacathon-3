import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 md:px-8 lg:px-16 mt-16 text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bag Section */}
        <div className="lg:col-span-2">
          <h2 className="text-xl md:text-2xl font-medium pl-3 mb-6">Bag</h2>

          {/* Cart Item 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-24 h-24 bg-orange-200 rounded overflow-hidden">
                <Image src="/image2.png" alt="." width={150} height={150} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-medium text-[#272343] mb-3">
                  Library Stool Chair
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex justify-center sm:justify-start space-x-12">
                  <p className="text-sm font-normal text-gray-600">Size: L</p>
                  <p className="text-sm font-normal text-gray-600">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex justify-center sm:justify-start gap-3 mt-3 text-gray-500">
                  <CiHeart />
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
            <div className="text-center sm:text-right mt-4 sm:mt-0">
              <p className="text-sm font-medium text-gray-700">MRP:</p>
              <p className="text-lg font-semibold text-gray-800">$99</p>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-24 h-24 bg-gray-300 rounded overflow-hidden">
                <Image src="/wood.png" alt="." width={150} height={150} />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-medium text-[#272343] mb-3">
                  Library Stool Chair
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex justify-center sm:justify-start space-x-12">
                  <p className="text-sm font-normal text-gray-600">Size: L</p>
                  <p className="text-sm font-normal text-gray-600">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex justify-center sm:justify-start gap-3 mt-3 text-gray-500">
                  <CiHeart />
                  <RiDeleteBin6Line />
                </div>
              </div>
            </div>
            <div className="text-center sm:text-right mt-4 sm:mt-0">
              <p className="text-sm font-medium text-gray-700">MRP:</p>
              <p className="text-lg font-semibold text-gray-800">$99</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="text-base md:text-lg">Subtotal</p>
              <p className="text-base md:text-lg font-semibold">$198.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-base md:text-lg">
                Estimated Delivery & Handling
              </p>
              <p className="text-base md:text-lg font-semibold text-green-500">
                Free
              </p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-lg md:text-xl font-bold">Total</p>
              <p className="text-lg md:text-xl font-bold">$198.00</p>
            </div>
            <button className="w-full md:w-auto md:px-12 py-3 rounded-full text-white bg-[#029FAE] hover:bg-[#026F78]">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
