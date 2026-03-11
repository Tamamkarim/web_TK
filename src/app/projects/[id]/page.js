import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import projectsData from "../../components/projectsData";


export default async function ProjectDetails({ params }) {
  const awaitedParams = await params;
  const projectId = parseInt(awaitedParams.id);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) return notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="w-full max-w-xl mb-6 rounded-lg shadow"
        style={{ objectFit: "cover" }}
        priority
      />
      <p className="mb-4 text-lg">{project.description || "No description provided."}</p>
      {project.technologies && (
        <div className="mb-4">
            <h2 className="font-semibold">Technologies Used:</h2>
          <ul className="list-disc list-inside">
            {project.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      )}
      {project.challenges && (
        <div className="mb-4">
          <h2 className="font-semibold">Challenges:</h2>
          <ul className="list-disc list-inside">
            {project.challenges.map((ch, i) => (
              <li key={i}>{ch}</li>
            ))}
          </ul>
        </div>
      )}
      {project.video && (
        <div className="mb-4">
          <h2 className="font-semibold">Demo Video:</h2>
          <video src={project.video} controls className="w-full max-w-xl rounded-lg" />
        </div>
      )}
      <div className="flex gap-4 mt-6">
        <a href={project.gitUrl} target="_blank" rel="noopener" className="px-4 py-2 bg-gray-800 text-white rounded">Project Code</a>
        {project.previewUrl && <a href={project.previewUrl} target="_blank" rel="noopener" className="px-4 py-2 bg-blue-600 text-white rounded">Live Preview</a>}
      </div>
    </div>
  );
}

export const dynamicParams = true;