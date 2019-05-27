import React from 'react';
import { Chaos } from './components/Chaos'

const withChaos = (WrappedComponent, level, errorMessage) => {
  return class extends React.Component {

    render() {
      return (
        <Chaos level={level} errorMessage={errorMessage}>
          <WrappedComponent {...this.props} />
        </Chaos>
      );
    }
  }
};

export default withChaos;