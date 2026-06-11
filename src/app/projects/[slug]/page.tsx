import React from "react";
import ProjectDetail from "../../../components/ProjectDetail";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectDetail slug={params.slug} />;
}
