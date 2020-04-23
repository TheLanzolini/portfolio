import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_QUERY, ProjectsData } from './projects.graphql';

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
