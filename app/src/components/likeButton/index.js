import React from 'react';
import HeartIcon from '../heartIcon';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.getLikeStatus(this.props.id)
    }
  }

  handleClick(id) {
    const current = this.getLikeStatus(id);
    localStorage.setItem(`${id}`, JSON.stringify(!current));
    this.setState ({
      isLiked: !current
    })
  }

  getLikeStatus(id) {
    return JSON.parse(localStorage.getItem(`${id}`));
  }

  render() {
    const id = this.props.id;
    return (
      <button className="btn btn-action s-circle float-right" onClick={() => this.handleClick(id)}>
        <HeartIcon liked={this.state.isLiked}/>
      </button>
    );
  }
}

export default LikeButton;
