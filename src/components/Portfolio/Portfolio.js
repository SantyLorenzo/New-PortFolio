import React from 'react';
import styled from 'styled-components';

// Components
import PortfolioItem from '../PortfolioItem';

// Theme and styles
import images from '../../Themes/Images';
import colors from '../../Themes/Colors';

const Portfolio = ({ className }) => {
  return (
    <div className={className}>
      <Wrapper>
        <SectionTitle>
          <Title>portfolio</Title>
          <ImageContainer>
            <Image src={images.portfolio} alt="Logo" className="animated fadeIn" />
          </ImageContainer>
        </SectionTitle>
        <PortfolioItem />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  height: 12vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  margin: 0 3vw 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 4.6vw;
  color: ${colors.black};
  animation-delay: 0.4s;
  animation-duration: 1s;
  font-family: IM Fell Great Primer SC;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 10vw;
`;

export default Portfolio;
