import React from 'react';
import ReactDOM from 'react-dom';
import Onyx from 'react-native-onyx';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));

Onyx.init({
  keys: { session: 'session' },
  safeEvictionKeys: ['actions'],
  keysToDisableSyncEvents: [],
  captureMetrics: false,
});

Onyx.merge('session', { loggedIn: true, big: false });
