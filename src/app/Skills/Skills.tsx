import React from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import { SKILLS_QUERY, SkillsData } from './skills.graphql';

const Skills = () => {
  const { loading, error, data } = useQuery<SkillsData>(SKILLS_QUERY);
  if (loading) {
    return 'Loading...';
  }
  if (error || data === undefined) {
    return 'Error';
  }
  return (
    <div>
      Skills go here
      <div>
        {data.skills.map((skill) => (
          <div key={skill.id}>
            <Link to={`/skill/${skill.slug}`}>{skill.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
