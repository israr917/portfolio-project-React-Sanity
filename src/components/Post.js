import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";
import sanityClient from "../client";

export default function Post() {
  const [postData, setPost] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
            title,
            slug,
            mainImage{
            asset->{_id,url},
            alt
            }


            } `
      )
      .then((data) => setPost(data)).catch(console.error);
  }, []);

  return (
    <main className=" bg-green-100  min-h-screen p-12  ">
      <section className="container mx-auto">
        <h1 className="text-5xl  flex justify-center cursive ">Blog posts pages</h1>
        <h2 className=" text-3xl flex justify-center mb-12 mt-4  ">Welcome to blog pages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8">

            {postData && postData.map((post, index) => (
            <article>

            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <span
                className="block  h-64  relative rounded  shadow leading-snug bg-white  border-l-8  border-yellow-200"
                key={index}
              >
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt}
                 className="w-full h-full rounded-r  object-cover absolute " />

                <span className=" block relative h-full flex justify-end items-end pr-4 pb-4 ">
                  <h3 className=" text-gray-800 text-lg  font-blod  px-3  py-4  bg-red-400  bg-opacity-75 rounded hover:bg-green-400">  {post.title}</h3>
                </span>
              </span>
            </Link>
                      </article>
                   ))}
        </div>
      </section>
    </main>
  );
}
