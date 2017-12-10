import React from 'react'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'

const StyledPanel = Panel.extend`
  padding: 16px;
  h3, p {
    margin: 0;
    text-align: left;
    width: 100%;
  }
  h3 {
    font-weight: normal;
  }
  p {
    font-weight: lighter;
    font-size: 24px;
  }
`

const ImagePanel = Panel.extend`
  overflow: hidden;
  a, img {
    height: 100%;
    display: block;
  }
`

const TextPanel = (project) => (
  <StyledPanel {...project}>
    <h3>
      <a target="_blank" href={project.link}>{project.name}</a>
    </h3>
    <p>{project.description}</p>
  </StyledPanel>
)

const ProjectList = ({ projects }) => (
  <div>
    {
      projects.map((project, index) => (
        <WideSection key={index}>
          { index % 2 === 1 && <TextPanel {...project} /> }
          <ImagePanel>
            <a target="_blank" href={project.link}>
              <img src={`/${project.image}`} />
            </a>
          </ImagePanel>
          { index % 2 === 0 && <TextPanel {...project} /> }
        </WideSection>
      ))
    }
  </div>
)

export default ProjectList
