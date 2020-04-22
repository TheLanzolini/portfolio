import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ProjectQueryVars } from '../../server/graphql/resolvers/project';
import { Skill } from '../../server/graphql/resolvers/skill';
import { PROJECT_QUERY } from './project.graphql';

interface ProjectParams {
  projectSlug: string;
}

interface ProjectDatum {
  id: string;
  title: string;
  skills: [Skill];
}

interface ProjectData {
  project: ProjectDatum;
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
  console.log(data);
  return (
    <div>
      <div>{data.project.title}</div>
      <div>Skills:</div>
      <div>
        {data.project.skills.map((skill) => (
          <div key={skill.id}>{skill.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Project;
