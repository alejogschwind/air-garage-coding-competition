import React from 'react';

import {
  AlertsWrapper,
  WelcomeMessage,
  ErrorMessage
} from './styles';

const Alerts = ({ data, loading, error, totalItems }) => {
  return (
    <AlertsWrapper>
      {/* Means that the user did not search for a location  */}
      {
        !loading && !error && !data &&
        <WelcomeMessage>
          <strong>
            Hi there!
          </strong>
          <p>
            You could start by searching for a location.
          </p>
        </WelcomeMessage>
      }
      {/* Means that the user search for a location, but there was not data to show. */}
      {
        !loading && !error && data && totalItems === 0 &&
        <ErrorMessage>
          <strong>
            Ops! No data
          </strong>
          <p>
            We don't have data for this location, try another one.
          </p>
        </ErrorMessage>
      }
      {/* Means that the user search for a location, but an error happened. */}
      {
        error && !loading &&
        <ErrorMessage>
          <strong>Ups! Something went wrong</strong>
          <p>There was an error with ours servers, try again later.</p>
        </ErrorMessage>
      }
    </AlertsWrapper>
  );
};

export default Alerts;
