import React from "react";
import webdeveloper from "../webdeveloper.jpeg";
export default function Home() {
  return (
    <>
      <main className="">
        <img
          className="  absolute object-cover w-full h-full"
          src={webdeveloper}
          alt="Web Designer & Developer "
        />

        <section className=" relative flex justify-start pt-12 lg:pt-36 px-8 ">
          <h1 className="text-5xl text-red-400 bg-gray-800 font-bold ml-16  hover:text-green-800 rounded-md p-4">
            Hello! Welcome
            <br /> to Website
          </h1>
        </section>
      </main>
    </>
  );
}
