import React, { Component } from 'react';
import PostsList from './PostsList';
import PostReducer from '../../reducers/postReducers';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
        pageCount: 10,
        offset: 0,
        data: [],
      };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.PostReducer.data.length > 0 && (this.props.PostReducer.data != nextProps.PostReducer.data) && this.state.offset === 0) {
      let firstData = nextProps.PostReducer.data.slice(0, 10);
      this.setState({
          data: firstData,
        });
    }
  }

  handlePageClick = (data) => {
        let selected = data.selected + 1;
        let offset = Math.ceil(selected * 10);
        let filteredPosts = this.props.PostReducer.data.slice(((selected - 1) * 10), selected * 10);
        this.setState(
            {
                offset: offset,
                data: filteredPosts,
              });
      };

  render() {
    return (
            <div>
                <h2>Posts Index page</h2>
                <PostsList data={this.state.data} />
                <ReactPaginate previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={<a href=''>...</a>}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'} />
            </div>
        );
  }
};

const mapStateToProps = (state, ownState) => {
    return {
        PostReducer: state.PostReducer,
      };
  };

export default connect(mapStateToProps)(Posts);
