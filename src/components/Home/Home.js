import React from 'react';
import styled from 'styled-components';

// Theme and styles
import './styles.scss';
import images from '../../Themes/Images';
import colors from '../../Themes/Colors';

const Home = ({ className }) => {
  return (
    <div className={className}>
      <Wrapper>
        <TitleContainer>
          <Title className="animated fadeInLeft">Hello, I am</Title>
          <Name className="animated fadeInLeft">Santiago Lorenzo</Name>
          <Description className="animated fadeInLeft">React/React Native developer.</Description>
        </TitleContainer>
        <ImageContainer>
          <Image src={images.home} alt="Home" className="animated fadeIn" />
        </ImageContainer>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  color: ${colors.black};
  font-size: 2.3vw;
  font-family: Merriweather;
  animation-duration: 0.9s;
  animation-delay: 0.2s;
`;

const Name = styled.h1`
  font-size: 4.6vw;
  color: ${colors.black};
  margin: 20px 0;
  animation-duration: 1s;
  animation-delay: 0.4s;
  font-family: IM Fell Great Primer SC;
`;

const Description = styled.p`
  color: ${colors.blue_green};
  font-size: 2.1vw;
  font-weight: 400;
  font-family: Merriweather;
  animation-duration: 1s;
  animation-delay: 0.6s;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 75%;
  animation-duration: 1.9s;
  animation-delay: 1s;
`;

export default Home;
