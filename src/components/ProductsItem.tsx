"use client";

import React, { useState } from "react";
import Image from "next/image";

import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

const ProductsItem = ({ product }: { product: ProductsType }) => {
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <div className="mt-10 border border-stone-400 rounded-lg">
      <Link href={`/products/${product.id}`} className="relative">
        <Image
          onMouseOver={() => setViewDetails(true)}
          onMouseOut={() => setViewDetails(false)}
          className="w-full h-[19rem]"
          src={`${product.image}`}
          alt={product.title}
          width={1000}
          height={1000}
        />
        <div
          className={`${
            viewDetails ? "bg-red-500/50" : "hidden"
          } h-full w-full absolute top-0 left-0 flex items-center justify-center text-xl text-white font-bold`}
        >
          View Details
        </div>
      </Link>

      <div className="flex justify-between items-center px-3 my-5">
        <span>${product.price}</span>
        <span className="bg-primary rounded-full p-1.5 cursor-pointer">
          <CiShoppingCart size={30} />
        </span>
      </div>

      <h1 className="font-bold px-3 truncate my-3">{product.title}</h1>
    </div>
  );
};

export default ProductsItem;
