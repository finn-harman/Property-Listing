import React from 'react';
import HeartIcon from '../heartIcon';

function LikeButton(props) {
  return (
    <button className="btn btn-action s-circle float-right" onClick={props.onLike}>
      <HeartIcon liked={props.liked}/>
    </button>
  )
}

export default LikeButton;
