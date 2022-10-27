import React from 'react';
import { withOnyx } from 'react-native-onyx';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 20,
};

function Component({ session }) {
  return (
    <div style={style}>
      <p>
        This is <code>withOnyx</code> component
      </p>
      <p>Logged in: {session?.loggedIn ? 'Yes' : 'No'}</p>
    </div>
  );
}

Component.propTypes = {
  session: PropTypes.shape({
    loggedIn: PropTypes.bool,
  }).isRequired,
};

export default withOnyx({
  session: {
    key: 'session',
  },
})(Component);
