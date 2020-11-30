import React from 'react';

class KeyFeatures extends React.Component {
  render() {
    const { features } = this.props

    return (
      <>
        <p>Key Features</p>
        <ul>
          {features.map(feature => (
            <li key={feature}>
              <small>{feature}</small>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default KeyFeatures
