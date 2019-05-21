import React from 'react';
// import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
// import messages from './messages';
import AppBar from '../MaterialUI/AppBar';

function Header() {
  return (
    <div>
      <AppBar />
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      {/* <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar> */}
    </div>
  );
}

export default Header;
