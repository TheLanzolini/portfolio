import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ProjectQueryVars } from '../../server/graphql/resolvers/project';
import { PROJECT_QUERY, ProjectData } from './project.graphql';

interface ProjectParams {
  projectSlug: string;
}

const Project = (props: RouteComponentProps<ProjectParams>) => {
  const {
    match: {
      params: { projectSlug },
    },
  } = props;
  const { loading, error, data } = useQuery<ProjectData, ProjectQueryVars>(
    PROJECT_QUERY,
    {
      variables: { slug: projectSlug },
    }
  );
  if (loading) {
    return 'Loading...';
  }
  if (error || data === undefined) {
    return 'Error';
  }
  return (
    <div>
      <h1>{data.project.title}</h1>
      <div>Skills:</div>
      <div>
        {data.project.skills.map((skill) => (
          <div key={skill.id}>
            <Link to={`/skill/${skill.slug}`}>{skill.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
