import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

// Components
import PortfolioItem from '../PortfolioItem';

// Theme and styles
import images from '../../Themes/Images';
import colors from '../../Themes/Colors';
import './styles.scss';

const Portfolio = ({ className }) => {
  return (
    <div className={className}>
      <Wrapper>
        <SectionTitle>
          <Title>portfolio</Title>
          <ImageContainer>
            <Image src={images.portfolio} alt="Portfolio" />
          </ImageContainer>
        </SectionTitle>
        <Slider {...settings}>
          {Projects.map(project => (
            <PortfolioItem
              title={project.title}
              image={project.image}
              description={project.description}
              linkToPage={project.linkToPage}
              linkToGithub={project.linkToGithub}
            />
          ))}
        </Slider>
      </Wrapper>
    </div>
  );
};

const Projects = [
  {
    title: 'Barbers',
    image: 'https://i.imgur.com/Hmkd8ma.png?1',
    description: 'The best barbershop located in the city of San Miguel del Monte.',
    linkToPage: 'https://personalwebsites1.netlify.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/BarberShop-website',
  },
  {
    title: 'Dissie',
    image: 'https://i.imgur.com/6VP3RzM.png?3',
    description: 'Meet new people all around the world using Disse, a public chat.',
    linkToPage: 'https://dissie-app.firebaseapp.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/Dissie',
  },
  {
    title: 'Rick and Morty Images',
    image: 'https://pixel.nymag.com/imgs/daily/vulture/2017/04/02/02-rick-and-morty.w330.h330.JPG',
    description: 'An image searcher consuming rick and morty API.',
    linkToPage: 'https://rick-and-morty-img-search.netlify.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/Rick-and-Morty-Image-Search',
  },
  {
    title: 'Unsplash Images',
    image:
      'https://d1qb2nb5cznatu.cloudfront.net/startups/i/65467-4b3e46561abf4c2727186ffb1aec54cf-medium_jpg.jpg?buster=1544713352',
    description: 'An image searcher consuming unsplash API.',
    linkToPage: 'https://unsplash-image-searcher.netlify.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/Unsplash-Image-Searcher',
  },
  {
    title: 'Old Portfolio',
    image: 'https://i.imgur.com/fwTSU56.png',
    description: 'This is my very first Portfolio',
    linkToPage: 'https://santiagolorenzo.netlify.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/Old-PortFolio',
  },
  {
    title: 'Adistec Challenge',
    image: images.adistec,
    description: 'React challenge for adistec, a software factory',
    linkToPage: 'https://adistec-challenge.netlify.com/',
    linkToGithub: 'https://github.com/SantyLorenzo/Adistec-react-challenge',
  },
];

const PrevArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ left: '0%', position: 'absolute', zIndex: '1' }}>
      <img
        src={images.prev_arrow}
        style={{ width: '4vw' }}
        alt="Logo"
        className="animated fadeIn"
      />
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ right: '0%', position: 'absolute', zIndex: '1' }}>
      <img
        src={images.next_arrow}
        style={{ position: 'absolute', width: '4vw', right: '2%' }}
        alt="Logo"
        className="animated fadeIn"
      />
    </div>
  );
};

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'slider',
  centerMode: true,
  centerPadding: '4.8vw',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnFocus: true,
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  height: 11vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Title = styled.p`
  margin: 0 3vw 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 4.6vw;
  color: ${colors.black};
  font-family: IM Fell Great Primer SC;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 8vw;
`;

export default Portfolio;
