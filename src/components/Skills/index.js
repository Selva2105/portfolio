import React from 'react';
import { skills } from '../../data/constants'
import { Container, Desc, Skill, SkillImage, SkillItem, SkillList, SkillTitle, SkillsContainer, Title, Wrapper } from './SkillsStyledComponents';

const Skills = () => {
  return (
    <Container id='skills'>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills which I have been working for the past 1 year.
        </Desc>
        <SkillsContainer>
        {skills.map((skill) => (
            <Skill key={skill.id}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.id}>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills