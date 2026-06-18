import { ProductCard } from "@/components/ui/Product/ProductCard";
import { ProductTabs } from "@/components/ui/Product/ProductTabs";
import { AddItemButton } from "@/components/widgets/AddItemButton";
import { AddWishlistButton } from "@/components/widgets/AddWishlistButton";
import {
  getLatestProducts,
  getProductById,
} from "@/lib/actions/product.actions";
import { Product } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { id: string };
};

const ProductDetails = async ({ params: { id } }: Props) => {
  // Product
  const product: Product = await getProductById(id);

  // Si el producto no existe (o falló la consulta), evita el crash y muestra 404.
  if (!product) {
    notFound();
  }

  // Related Products
  const relatedProducts = await getLatestProducts({ limit: 4 });

  return (
    <>
      <main className="container mt-24 flex flex-col gap-2 lg:gap-5 lg:flex-row">
        <div
          className="w-full h-96 border border-gray-300 rounded-3xl flex items-center justify-center lg:w-auto lg:min-w-96"
          style={{
            background: `linear-gradient(to top, transparent 10%, ${product.color} 60%)`,
          }}>
          <Image
            src={product.picture}
            alt="Product Image"
            width={250}
            height={250}
            className=" object-contain"
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden ">
          <span className="text-2xl font-medium text-center lg:text-left">
            {product.name}
          </span>
          <div className="w-fit flex gap-2 px-4 py-2 rounded-full bg-zinc-50 mx-auto lg:mx-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-5 text-golden"
              viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-5 text-golden"
              viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-5 text-golden"
              viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-5 text-golden"
              viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-5 text-golden"
              viewBox="0 0 16 16">
              <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
            </svg>
            <span>4.2</span>
          </div>
        </div>
        <div className="flex-grow flex flex-col gap-3 order-1 lg:order-none lg:mt-8">
          <div className="hidden flex-col gap-3 lg:flex">
            <span className="text-2xl font-medium text-center lg:text-left">
              {product.name}
            </span>
            <div className="w-fit flex gap-2 px-4 py-2 rounded-full bg-zinc-50 mx-auto lg:mx-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-5 text-golden"
                viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-5 text-golden"
                viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-5 text-golden"
                viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-5 text-golden"
                viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-5 text-golden"
                viewBox="0 0 16 16">
                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
              </svg>
              <span>4.2</span>
            </div>
          </div>
          <ProductTabs product={product} />
        </div>
        <div className="w-full h-96 border border-gray-300  rounded-2xl flex flex-col gap-2 p-4 mt-4 lg:mt-0 lg:w-auto lg:min-w-72">
          <div className="flex gap-2 flex-grow">
            <span className="w-fit px-4 py-2 bg-black rounded-xl text-white text-3xl flex items-center justify-center mx-auto lg:mx-0">
              {product.price.toFixed(2).replace(".", ",")} €
            </span>
          </div>
          <div
            className="w-full h-16 text-white flex items-center justify-center gap-3 rounded-xl  relative"
            style={{
              background: `linear-gradient(90deg, #fc59d9 0%, #FF29D2 100%)`,
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-6"
              viewBox="0 0 16 16">
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
            <div className="flex flex-col leading-5">
              <span className="font-bold">
                Earn {Math.round(product.price * 50)} points
              </span>
              <span>from this product</span>
            </div>
          </div>
          <div className="w-full h-16 bg-zinc-50  flex items-center justify-center gap-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
            </svg>
            <div className="flex flex-col leading-5">
              <span className="font-bold">Estimated Delivery</span>
              <span>16-20 May, 2025</span>
            </div>
          </div>
          <div className="w-full h-16 gap-2 rounded-xl flex">
            <AddWishlistButton productId={product._id} type="page" />
          </div>
          <AddItemButton product={product} type="page" />
        </div>
      </main>
      <section className="container mt-8 lg:mt-10">
        <h2 className="text-2xl font-bold text-center lg:text-left">
          Related Products
        </h2>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 mt-5">
          {relatedProducts?.map((product: Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
