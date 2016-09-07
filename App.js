import React from 'react';
import ReactDOM from 'react-dom';

class CommentBox extends React.Component {
  constructor(){
    super();

    this.state = {

    };
  }

  _getComments(){


  }

  _getCommentsTitle(commentCount){


  }

  _handleClick(){

  }

  _addComment(author, body){

  }

  render(){

    return (
      <div className="comment-box">
        <form className="comment-form">
          <label>Join the Discussion</label>
          <div className="comment-form-fields">
            <div><input placeholder="Name: "/></div>
            <div><textarea placeholder="Comment: "></textarea></div>
          </div>
          <div className="comment-form-actions">
            <button type="submit">
              Post comment
            </button>
          </div>
        </form>
      <h3 className="comment-count">1 Lonely Comment</h3>
        <div className="comment">
          <p className="comment-header"></p>
          <p className="comment-body">Content</p>
          <p className="comment-body">Author</p>
          <div className="comment-footer">
            <a href="#" className="comment-footer-delete">
              Delete Comment
            </a>
          </div>
        </div>
      <button>Hide Comments</button>
      </div>
    )
  }
}

class Comment extends React.Component {
  render(){

  }
}

class CommentForm extends React.Component {
  render(){

  }

  _handleSubmit(event) {
    event.preventDefault();


  }

}//end of CommentForm component

export default CommentBox

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
)
