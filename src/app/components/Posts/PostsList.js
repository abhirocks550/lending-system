import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import './posts.css';

const PostsList = (props) => {
    return (
        <div>
            <h4>Posts List</h4>
            <div className="row" >
                {
                    props.data.map((post, index) => {
                        return (
                            <div className="col-md-6 posts" key={index}>
                                <div className="panel panel-primary">
                                    <div className="panel-heading">{post.title}</div>
                                    <div className="panel-body">
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            </div>
                        );
                      })
                }
            </div>
        </div>
    );
  };

export default PostsList;
