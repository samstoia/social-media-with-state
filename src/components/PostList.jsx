import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types'

function PostList(props) {

  let container = {
    width: '90%',
    backgroundColor: 'white'
  }


  return (
    <div style={container}>

      {props.postList.map((post, index) =>
      
        <Post onUpdateStateFromPost = {props.onUpdateStateFromPost}
        status = {post}
          img={post.img}
          name={post.name}
          text={post.text}
          likes={post.likes}
          key={index}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  newList: PropTypes.array
};


export default PostList;