import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LenderActions from '../../actions/ListLenderActions';
import { Button, Modal } from 'react-bootstrap';

class Transactions extends Component {
  constructor() {
    super();

    this.state = {
        showModal: false,
      };
    this.getInitialState = this.getInitialState.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  };

  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
            <div className="container">
                <h3 className='text-center'>List of Transactions</h3>
        </div>
      );
  }
}

const mapStateToProps = (state, ownState) => {
    return {
    };
  };

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);

