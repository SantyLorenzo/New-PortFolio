import React from 'react';
import styled from 'styled-components';

// Theme and styles
import colors from '../../Themes/Colors';
import images from '../../Themes/Images';

const PortfolioItem = ({ className, title, image, description, linkToPage, linkToGithub }) => {
  return (
    <Wrapper className={className}>
      <ImageContainer>
        <Image src={image} alt="Home" className="animated fadeIn" />
      </ImageContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <DescriptionContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </DescriptionContainer>
        <ButtonsContainer>
          <PreviewButton to={linkToPage} />
          <SourceButton to={linkToGithub} />
        </ButtonsContainer>
      </div>
    </Wrapper>
  );
};

const PreviewButton = ({ to }) => (
  <Button style={{ backgroundColor: colors.black }} href={to}>
    Preview
  </Button>
);

const SourceButton = ({ to }) => (
  <Button style={{ backgroundColor: colors.blue_green }} href={to}>
    {/* // <Button style={{ backgroundColor: colors.black }} href="https://dissie-app.firebaseapp.com/"> */}
    Source
  </Button>
);

const Wrapper = styled.div`
  width: 20vw;
  padding: 2vw;
  height: 30vw;
  display: flex;
  align-items: center;
  border-radius: 8px;
  flex-direction: column;
  border: 1px solid ${colors.grey};
  // transition: all 0.5s ease;
  // :hover {
  //   -webkit-box-shadow: 0px 3px 48px -24px rgba(0, 0, 0, 0.75);
  //   -moz-box-shadow: 0px 3px 48px -24px rgba(0, 0, 0, 0.75);
  //   box-shadow: 0px 3px 48px -24px rgba(0, 0, 0, 0.75);
  // }
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  animation-duration: 1.9s;
  animation-delay: 1s;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.p`
  color: ${colors.black};
  font-size: 1.7vw;
  font-weight: 400;
  // margin: 5vw 0 0 0;
  text-align: center;
  font-family: Merriweather;
`;
const Description = styled.p`
  color: ${colors.dark_grey};
  font-size: 1.3vw;
  letter-spacing: 0.1vw;
  font-weight: 300;
  text-align: center;
  font-family: Merriweather;
`;

const ButtonsContainer = styled.div`
  margin: 2vw 0 2vw 0;
`;

const Button = styled.a`
  padding: 1vw 1.2vw;
  border-radius: 4px;
  color: ${colors.light};
  text-decoration: none;
  margin: 0.5vw;
  font-size: 1.3vw;
  font-family: Merriweather;
  webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
`;

export default PortfolioItem;
