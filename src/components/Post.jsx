import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.status;
    console.log(this.state);

  }

  likeButtonClicked() {
    this.setState({likes: this.state.likes + 1});
    setTimeout(()=> {
      console.log(this.props);
      this.props.onUpdateStateFromPost(this.state);
    }, 0)
  }

  render(){

  
  let image = {
    width: '50px',
    height: '50px',
    marginTop: '15px',
    objectFit: 'cover',
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
  }

  let border ={ 
    border: '1px solid blue',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    padding: '1em',
    margin: '1em 0 1em 0'

  }

  return (

    <div style={border}>
      <img style={image} src={this.props.img}/>
      <div id="textFeed">
        <h1><strong>{this.props.name}</strong></h1>
        <p>{this.props.text}</p>
        <p>Likes: {this.props.likes}</p>
        <button onClick={()=> this.likeButtonClicked()}>Like Post</button>
      </div>
    </div>

  );
}
}





// Post.propTypes = {
//   img: PropTypes.string,
//   name: PropTypes.string,
//   text: PropTypes.string
// }

export default Post;