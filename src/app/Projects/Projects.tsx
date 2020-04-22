import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { Link } from 'react-router-dom';
import { Skill } from '../../server/graphql/resolvers/skill';
import { PROJECTS_QUERY } from './projects.graphql';

interface ProjectDatum {
  id: string;
  slug: string;
  title: string;
  skills: Skill[];
}

interface ProjectsData {
  projects: ProjectDatum[];
}

const Projects = () => {
  const { loading, error, data } = useQuery<ProjectsData>(PROJECTS_QUERY);
  if (loading) {
    return 'Loading...';
  }
  if (error) {
    return 'Error fetching';
  }
  console.log(process.browser, data);
  return (
    <div>
      {data &&
        data.projects &&
        data.projects.map((project) => (
          <div key={project.id}>
            <Link to={`/project/${project.slug}`}>{project.title}</Link>
          </div>
        ))}
    </div>
  );
};

export default Projects;
