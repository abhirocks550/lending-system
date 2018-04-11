import React, { Component } from 'react';

const PostsList = (props) => {
    return (
        <div>
            <h4>Posts List</h4>
            <div className="row" >
                {
                    props.PostReducer.data.map((post, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="panel panel-default">
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
