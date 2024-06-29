import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type=="project"]{
            title,
            date,
            place,
            discription,
            projectType,
            link,
            tags
       }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  });

  return (
    <main className="bg-green-100  min-h-screen p-12">
      <section className="container max-auto">
        <h1 className="text-5xl  flex justify-center cursive">My Projects</h1>
        <h2 className=" text-lg  flex justify-center mb-12 mt-4">
          Welcome to prjects Page{" "}
        </h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className=" relative rounded-lg shadow-lg  bg-white p-16">
                <h3 className="text-gray-800 text-3xl  font-bold  mb-2  hover:text-red-500">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    {project.title}
                  </a>
                </h3>

                <div className="  text-xs  space-x-4">
                  <span>
                    <strong className=" font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className=" font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className=" font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-black leading-relaxed">
                    {project.discription}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferer"
                    className="text-red-500 font-bold hover: underline  hover:text-red-300"
                  >
                    View the Project{" "}
                  </a>

                  <span role="img" aria-label="right pointer">
                    {" 👉"}
                  </span>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
