import React, { Component } from 'react';
import * as CommentsActions from '../../actions/commentsActions';
import { connect } from 'react-redux';

class Comments extends Component {
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    console.log('CommentReducer', this.props.CommentReducer);
    return (
      <div>
        <h3>Comments</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  return {
    CommentReducer: state.CommentReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  getComments: () => {
    dispatch(CommentsActions.GetComments());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

