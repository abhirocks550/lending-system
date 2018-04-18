import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TransactionActions from '../../actions/TransactionActions';

class Transactions extends Component {
  constructor() {
    super();
  };

  componentWillMount() {
    this.props.GetTransactions();
  }

  render() {
    return (
            <div className="container"
            style = {this.props.TransactionReducer.transList.length == 0 ?
            { display: 'none' } : {} }>
                <h4 style={{ textAlign: 'center' }}>Transactions </h4>

                <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Transaction Date</th>
                                <th>Lender</th>
                                <th>Borrower</th>
                                <th>Amount</th>
                                <th>Interest</th>
                                <th>Status</th>
                            </tr>
                    </thead>
                    {
                        this.props.TransactionReducer.transList.map((req, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td className="col-md-2">{req.id}</td>
                                        <td className="col-md-2">{req.createDate}</td>
                                        <td className="col-md-3">{req.lender}</td>
                                        <td className="col-md-3">{req.borrower}</td>
                                        <td className="col-md-2">{req.amount}</td>
                                        <td className="col-md-2">{req.interest}</td>
                                        <td className="col-md-2">{req.status}</td>
                                    </tr>
                                </tbody>
                            );
                          })
                    }
                   </table>
                </div>
              </div>
            </div>
      );
  }
}

const mapStateToProps = (state, ownState) => {
    return {
        TransactionReducer: state.TransactionReducer,
      };
  };

const mapDispatchToProps = dispatch => ({
    GetTransactions: (event) => {
      dispatch(TransactionActions.GetTransactions());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);

