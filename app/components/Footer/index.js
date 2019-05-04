import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
// import EmailSignUp from 'components/Footer/EmailSignUp';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
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
      <section>
        <LocaleToggle />
      </section>
    </Wrapper>
  );
}

export default Footer;
