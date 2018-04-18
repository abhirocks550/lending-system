import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as RequestActions from '../../actions/RequestActions';

class Requests extends Component {
  constructor() {
    super();
  };

  componentWillMount() {
    this.props.GetRequest(this.props.LoginReducer.userDetails.id, this.props.LoginReducer.userDetails.role);
  }

  render() {
    return (
            <div className="container"
            style = {this.props.RequestReducer.reqList.length == 0 ?
            { display: 'none' } : {} }>
                <h4 style={{ textAlign: 'center' }}>My request </h4>

                <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Request ID</th>
                                <th>Request Date</th>
                                <th>Lender</th>
                                <th>Borrower</th>
                                <th>Amount</th>
                                <th>Interest Rate</th>
                                <th>emi</th>
                                <th>Tenure</th>
                                <th>Status</th>
                            </tr>
                    </thead>
                    {
                        this.props.RequestReducer.reqList.map((req, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td className="col-md-1">{req.id}</td>
                                        <td className="col-md-2">{req.createDate}</td>
                                        <td className="col-md-2">{req.lender}</td>
                                        <td className="col-md-2">{req.borrower}</td>
                                        <td className="col-md-1">{req.amount}</td>
                                        <td className="col-md-2">{req.interest}</td>
                                        <td className="col-md-1">{req.emi}</td>
                                        <td className="col-md-1">{req.tenureInMonths}</td>
                                        <td className="col-md-1">{req.status}</td>
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
        RequestReducer: state.RequestReducer,
        LoginReducer: state.LoginReducer,
      };
  };

const mapDispatchToProps = dispatch => ({
    GetRequest: (id, role) => {
      dispatch(RequestActions.GetRequest(id, role));
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Requests);

