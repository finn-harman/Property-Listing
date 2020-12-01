import React from 'react';

class EditButton extends React.Component {

  async postData() {
    const data = { postcode: "POSTCODE" };

    // fetch('/server/listings.json/')
    //   .then(res => res.json())
    //   .then(res => console.log(res))

    fetch('/server/listings.json', {
      method: 'GET',
    })
  }

  render() {
    return (
      <button className="btn" onClick={this.postData}>
        Edit Price
      </button>
    )
  }
}

export default EditButton;
