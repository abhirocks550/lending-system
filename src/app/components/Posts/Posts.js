import React, { Component } from 'react';
import PostsList from './PostsList';
import PostReducer from '../../reducers/postReducers';
import { connect } from 'react-redux';

const Posts = (props) => {
    return (
        <div>
            <h2>Posts Index page</h2>
            <PostsList {...props} />
        </div>
    );
  };

const mapStateToProps = (state, ownState) => {
    return {
        PostReducer: state.PostReducer,
      };
  };

export default connect(mapStateToProps)(Posts);
