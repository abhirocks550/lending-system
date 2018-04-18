import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LenderActions from '../../actions/ListLenderActions';
import { Button, Modal } from 'react-bootstrap';

class ListLender extends Component {
  constructor() {
    super();
    this.state = {
        showModal: false,
        lenderName: '',
        lenderroi: '',
        lenders: [
            { firstName: 'Abhijit', balanceAmt: 145200, interestRate: 7.5 },
            { firstName: 'Ankita', balanceAmt: 15200, interestRate: 8 },
        ],
      };
    this.close = this.close.bind(this);
    this.updateInput = this.updateInput.bind(this);
  };

  close() {
    this.setState({ showModal: false });
  }

  open(lender) {
    this.setState({ lenderName: lender.firstName, lenderroi: lender.interestRate });
    this.setState({ showModal: true });
  }

  updateInput(event) {
    this.props.UpdateInput(event);
  }

  componentWillMount() {
    this.props.GetLenders();
  }

  render() {
    let stateLenders = this.state.lenders;
    let reducerLenders =  this.props.LendersReducer.lenders;
    return (
            <div className="container">
                <h3 className='text-center'>List of Lenders</h3>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Rate of Interest</th>
                                    <th>Request loan</th>
                                </tr>
                            </thead>

                            <tbody >
                                {
                                    stateLenders.map((lender, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="col-md-3">{lender.firstName}</td>
                                                <td className="col-md-3">{lender.balanceAmt}</td>
                                                <td className="col-md-3">{lender.interestRate}</td>
                                                <td className="col-md-3">
                                                    <Button
                                                        bsStyle="primary"
                                                        bsSize="small"
                                                        onClick={() => this.open(lender)}
                                                    >
                                                    Request
                                                </Button>
                                                </td>
                                            </tr>
                                        );
                                      })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* MODAL FOR APPLYNG LOAN */}
                <div>
                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Apply for Loan</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <label>Lender name</label>
                                    <input type="text" disabled
                                        name="lendername" className="form-control"
                                        value={this.state.lenderName} id="lendername" />
                                </div>
                                <div className="form-group">
                                    <label>Rate of Interest:</label>
                                    <input type="text" disabled name="roi"
                                        value={this.state.lenderroi} className="form-control" id="roi" />
                                </div>
                                <div className="form-group">
                                    <label>Amount:</label>
                                    <input type="number" onChange={this.updateInput}
                                        name="amount" className="form-control" id="amount" />
                                </div>
                                <button type="button"
                                    className="btn btn-default">Apply for Loan</button>
                            </form>
                            <hr />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.close}>Close</Button>
                        </Modal.Footer>

                    </Modal>
                </div>
                {/* CLOSE MODAL */}
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

    GetLenders: () => {
        dispatch(LenderActions.GetLenders());
      },

    UpdateInput: (event) => {
        dispatch(LenderActions.UpdateInput(event));
      },

  });

export default connect(mapStateToProps, mapDispatchToProps)(ListLender);

