import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import LikeButton from '../likeButton';

function Listing(props) {
  if (!props.listing) {
    return null;
  }

  const { id, image, title, address, description, price, dateAvailable } = props.listing;
  const columnClasses = classnames('column', 'col-4', 'col-xs-12');

  return (
    <div className={columnClasses} style={{ margin: '1rem 0'}}>
      <div className={'card'}>
        <div className='card-image'>
          <img className='img-responsive' src={`/server/${image}`} alt={address} />
        </div>
        <div className='card-header'>
          <div className='card-title h5'>{title}</div>
          <div className='card-title h6'>&pound; {price}</div>
          <div className='card-subtitle text-gray'>{address}</div>
        </div>
        <div className='card-body'>Date available: {dateAvailable}</div>
        <div className='card-body'>{description}</div>
        <div className='card-footer'>
          <Link className="btn btn-primary" to={`/details/${id}`}>
            View
          </Link>
          <LikeButton id={address}/>
        </div>
      </div>
    </div>
  );
}

export default Listing
