import React from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

function HeartIcon(props) {
  const isLiked = props.liked;
  if (isLiked) {
    return <BsHeartFill style={{verticalAlign: 'middle'}}/>;
  } else {
    return <BsHeart style={{verticalAlign: 'middle'}}/>;
  }
}

export default HeartIcon;
