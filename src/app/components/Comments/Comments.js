import React, { Component } from 'react';
import * as CommentsActions from '../../actions/commentsActions';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import ReactPaginate from 'react-paginate';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
        pageCount: 50,
        offset: 0,
        data: [],
      };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.CommentReducer.data.length > 0 && (this.props.CommentReducer.data != nextProps.CommentReducer.data) && this.state.offset === 0) {
      let firstData = nextProps.CommentReducer.data.slice(0, 10);
      this.setState({
          data: firstData,
        });
    }
  }

  handlePageClick = (data) => {
        let selected = data.selected + 1;
        let offset = Math.ceil(selected * 10);
        let filteredPosts = this.props.CommentReducer.data.slice(((selected - 1) * 10),
         selected * 10);
        this.setState(
            {
                offset: offset,
                data: filteredPosts,
              });
      };

  componentDidMount() {
    this.props.getComments();
  }

  render() {
    let comments = null;
    if (this.props.CommentReducer && this.props.CommentReducer.isLoggedIn) {
      comments = (
        <div>
          <h3>Comments</h3>
          <CommentList data={this.state.data} />
          <ReactPaginate previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={<a href=''>...</a>}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'} />
      </div>
     );
    } else {
      this.props.router.push('/login');
    }

    return (
      <div>
        { comments }
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
