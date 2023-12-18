import React from 'react';
import { CardContainer, Container, Desc, Divider, Title, ToggleButton, ToggleButtonGroup, Wrapper } from './ProjectStyleComponents';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = React.useState("all");

  return (
    <Container id='projects'>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here is my Project's listed below</Desc>

        {projects.length > 0 ? (
          <ToggleButtonGroup>
            <ToggleButton active={toggle === 'all'} value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
            <Divider />
            <ToggleButton active={toggle === 'web app'} value="web app" onClick={() => setToggle('web app')}>
              WEB APP'S
            </ToggleButton>
          </ToggleButtonGroup>
        ) : (
          <Desc>No projects to display.</Desc>
        )}

        {projects.length > 0 && (
          <CardContainer>
            {toggle === 'all' &&
              projects.map((project) => (
                <ProjectCard project={project} key={project.id} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
            {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard project={project} key={project.id} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
          </CardContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
