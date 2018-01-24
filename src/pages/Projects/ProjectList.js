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

const ProjectSection = WideSection.extend.attrs({
  reverse: props => props.reverse,
})`
  flex-direction: row${props => props.reverse};
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`

const ProjectList = ({ projects }) => (
  <div>
    {
      projects.map((project, index) => (
        <ProjectSection reverse={index % 2 === 0 ? '-reverse' : ''} key={index}>
          <TextPanel {...project} />
          <ImagePanel>
            <a target="_blank" href={project.link}>
              <img src={`${project.image}`} />
            </a>
          </ImagePanel>
          {/* index % 2 === 0 && <TextPanel {...project} /> */}
        </ProjectSection>
      ))
    }
  </div>
)

export default ProjectList
