import React from 'react';

class EditButton extends React.Component {

  handleClick() {
    fetch('/server/listings.json')
      
  }

  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        Edit Price
      </button>
    )
  }
}

export default EditButton;
