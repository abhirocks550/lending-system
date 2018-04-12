import React, { Component } from 'react';
import { Button, HelpBlock, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import * as PostActions from '../../actions/postActions';
import { connect } from 'react-redux';

class AddPosts extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);

    this.state = {
      value: '',
    };
  }

  validateForm(event) {
    event.preventDefault();
    let post = {
        title: this.props.PostReducer.title,
        body:  this.props.PostReducer.body,
        userId: 1,
      };
    this.props.savePost(post);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.props.updateInput(e);
  }

  render() {
    return (
            <form onSubmit={(event) => this.validateForm(event)}>
            <h2 className='text-center'>Add your Post</h2>
                <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
                >
                <ControlLabel>Add title for the post</ControlLabel>
                <FormControl
                    type="text"
                    required
                    name='title'
                    value={this.props.PostReducer && this.props.PostReducer.title}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Add body for the post</ControlLabel>
                    <FormControl
                        name='body'
                        value={this.props.PostReducer && this.props.PostReducer.body}
                        onChange={this.handleChange}
                        required componentClass="textarea" placeholder="textarea" />
                </FormGroup>

                <Button type="submit">Submit</Button>
        </form>
        );
  }
}

const mapStateToProps = (state, ownState) => {
    return {
        PostReducer: state.PostReducer,
      };
  };

const mapDispatchToProps = dispatch => ({
  updateInput: (event) => {
      dispatch(PostActions.UpdateInput(event));
    },

  savePost: (post) => {
    dispatch(PostActions.SavePost(post));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPosts);

