import React from 'react';
import styled from 'styled-components';

// Theme and styles
import images from '../../Themes/Images';
import colors from '../../Themes/Colors';

const Contact = ({ className }) => {
  return <Wrapper className={className} />;
};

const contactWays = [
  {
    name: 'Linkedin',
    image: images.linkedin,
    link: 'linkedin.com/in/santiago-lorenzo/',
  },
  {
    name: 'Gmail',
    image: images.gmail,
    link: 'santylore4@gmail.com',
  },
  {
    name: 'Github',
    image: images.github,
    link: 'github.com/SantyLorenzo',
  },
];

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${colors.black};
`;

export default Contact;
