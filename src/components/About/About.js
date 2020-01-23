import React from 'react';
import styled from 'styled-components';

// Theme and styles
import images from '../../Themes/Images';
import colors from '../../Themes/Colors';

const About = ({ className }) => {
  return (
    <Wrapper className={className}>
      <SectionTitle>
        <Title>About Me</Title>
      </SectionTitle>
      <ContentContainer>
        <ImageContainer>
          <Image src={images.about} alt="Portfolio" />
        </ImageContainer>
        <DescriptionContainer>
          <Description>
            <FirstLine>My name is Santiago, I'm 19 years old.</FirstLine>I am a versatile developer
            with experience working in both, web and mobile environments.
            <br /> Am always looking for create a great business culture.
          </Description>
          <SkillsContainer>
            <SkillsTitle>skills:</SkillsTitle>
            <Skills>
              {listOfSkills.map(skill => (
                <Skill image={skill.image} name={skill.name} />
              ))}
            </Skills>
          </SkillsContainer>
        </DescriptionContainer>
      </ContentContainer>
    </Wrapper>
  );
};

const listOfSkills = [
  {
    name: 'react',
    image: images.react,
  },
  {
    name: 'redux',
    image: images.redux,
  },
  {
    name: 'git',
    image: images.git,
  },
  {
    name: 'sass',
    image: images.sass,
  },
  {
    name: 'npm',
    image: images.npm,
  },
  {
    name: 'more',
    image: images.more,
  },
];

const Skill = ({ image, name }) => (
  <div
    style={{
      width: '3vw',
      height: '3vw',
      display: 'flex',
      marginRight: '2vw',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img style={{ width: '2.7vw' }} src={image} alt={name} />
  </div>
);

const SkillsTitle = styled.div`
  margin: 0 0 1vw 0;
  display: flex;
  font-size: 3.3vw;
  color: ${colors.black};
  font-family: IM Fell Great Primer SC;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
`;

const FirstLine = styled.p`
  color: ${colors.blue_green};
  font-size: 2.2vw;
  font-weight: 400;
  letter-spacing: 0.1vw;
  margin: 0;
  font-family: Merriweather;
`;

const Description = styled.p`
  color: ${colors.black};
  font-size: 2.1vw;
  font-weight: 400;
  letter-spacing: 0.1vw;
  line-height: 1.6;
  font-family: Merriweather;
`;

const DescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentContainer = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Title = styled.p`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 4.6vw;
  color: ${colors.black};
  font-family: IM Fell Great Primer SC;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 60%;
`;

export default About;
