import React from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

// Components
import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

// Theme
import colors from '../../Themes/Colors';

const App = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    render={() => (
      <Wrapper>
        <Home className="section" />
        <Portfolio className="section" />
        <About className="section" />
        <Contact className="section" />
      </Wrapper>
    )}
    ReactFullpage
  />
);

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  background-color: ${colors.light};
  flex-direction: column;
`;

export default withRouter(App);
