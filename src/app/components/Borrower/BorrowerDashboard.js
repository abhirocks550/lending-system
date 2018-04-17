import React from 'react';
import { connect } from 'react-redux';

class Borrower extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <h2>Borrower Dashboard</h2>
      </div>
    );
  };
}

const mapStateToProps = (state, ownState) => {
    return {
    };
  };

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Borrower);
