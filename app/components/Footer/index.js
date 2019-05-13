import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
// import EmailSignUp from 'components/Footer/EmailSignUp';
import Wrapper from './Wrapper';
import messages from './messages';

const Copyright = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <Wrapper>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage {...messages.addressMessage} />
      </section>
      <section>
        <FormattedMessage
          {...messages.phoneNumberTollFreeMessage}
          values={{
            tollFreeNumber: <A href="tel:+1-800-540-5823">1-(800)-540-5823</A>,
          }}
        />
      </section>
      <section>
        <FormattedMessage
          {...messages.phoneNumberInternationalMessage}
          values={{
            internationalNumber: (
              <A href="tel:1-909-865-3081">1-(909)-865-3081</A>
            ),
          }}
        />
      </section>
      <Copyright>
        <section>
          <FormattedMessage
            {...messages.copyRightsMessage}
            values={{
              goldenWestLink: (
                <A href="https://gwlinc.com/">GoldenWest Lubricants, Inc.</A>
              ),
            }}
          />
        </section>
      </Copyright>
    </Wrapper>
  );
}

export default Footer;
