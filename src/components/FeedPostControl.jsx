import React from 'react';
import PropTypes from "prop-types";

import NewPostForm from './NewPostForm';
import PostList from './PostList';


class FeedPostControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          postsVisibleOnPage: false,
          masterPostList: []
        };
        this.handlePostSubmission = this.handlePostSubmission.bind(this);
        this.handleUpdateStateFromPost = this.handleUpdateStateFromPost.bind(this);

      }
    


      handlePostSubmission(newPost){
        var newMasterPostList = this.state.masterPostList.slice();
        
        
        newMasterPostList.push(newPost);
        this.setState({masterPostList: newMasterPostList, postsVisibleOnPage: true
          
        });
      }

      handleUpdateStateFromPost(postToBeUpdated) {
        var newMasterPostList = this.state.masterPostList.slice();
        var postIndex = this.getPostIndex(postToBeUpdated, newMasterPostList);
        newMasterPostList.splice(postIndex, 1, postToBeUpdated);
        this.setState({masterPostList: newMasterPostList});
      }

      getPostIndex(post, arr) {
        for (let i = 0; i < arr.length; i++) {
          if (post.id = arr[i].id) {
            return i;
          }
        }
      }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.postsVisibleOnPage){
      currentlyVisibleContent = <PostList onUpdateStateFromPost = {this.handleUpdateStateFromPost} postList = {this.state.masterPostList} onNewPostCreation={this.props.onNewPostCreation}/>;
    }

    return (
      <div>
        <NewPostForm onNewPostCreation={this.handlePostSubmission}/>
        {currentlyVisibleContent}
      </div>
    );
  }
}

FeedPostControl.propTypes = {
    onNewTweetCreation: PropTypes.func
  };

export default FeedPostControl;