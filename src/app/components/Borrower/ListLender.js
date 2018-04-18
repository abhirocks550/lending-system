import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LenderActions from '../../actions/ListLenderActions';

class ListLender extends Component {
  constructor() {
    super();
  };

  componentWillMount() {
    this.props.GetLenders();
  }

  render() {
    return (
            <div className="container">
                <h3 style={{ textAlign: 'center' }}>Lenders List</h3>

                <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Rate of Interest</th>
                                <th>Request loan</th>
                            </tr>
                    </thead>
                    {
                        this.props.LendersReducer.lenders.map((lender, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td className="col-md-3">{lender.firstName}</td>
                                        <td className="col-md-3">{lender.balanceAmt}</td>
                                        <td className="col-md-3">{lender.interestRate}</td>
                                        <td className="col-md-3">
                                            <button className="btn btn-sm btn-primary">
                                                Request
                                            </button>
                                        </td>
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
        LendersReducer: state.ListLenderReducer,
      };
  };

const mapDispatchToProps = dispatch => ({

    GetLenders: (event) => {
      dispatch(LenderActions.GetLenders());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(ListLender);

