import React from 'react';
import { useQuery } from 'react-apollo';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { SKILL_QUERY, SkillData, SkillQueryVars } from './skill.graphql';

interface SkillParams {
  skillSlug: string;
}

const Skill = (props: RouteComponentProps<SkillParams>) => {
  const {
    match: {
      params: { skillSlug },
    },
  } = props;
  const { loading, error, data } = useQuery<SkillData, SkillQueryVars>(
    SKILL_QUERY,
    { variables: { slug: skillSlug } }
  );
  if (loading) {
    return 'Loading...';
  }
  if (error || data === undefined) {
    return 'Error!';
  }
  console.log(data);
  return (
    <div>
      <h1>{data.skill.title}</h1>
      <p>{data.skill.description}</p>
      <div>
        <div>projects with this skill</div>
        <div>
          {data.skill.projects.map((project) => (
            <div key={project.id}>
              <Link to={`/project/${project.slug}`}>{project.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
