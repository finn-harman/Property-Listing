import React from 'react';
import Hero from '../../components/hero';
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider';
import Listing from '../../components/listing';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const storedLikeArray = localStorage.getItem('likeArray');
    if (storedLikeArray) {
      this.state = {
        likeArray: JSON.parse(storedLikeArray),
      }
    } else {
      this.state = {
        likeArray: Array(6).fill(false),
      }
    }
  }

  handleLike(i) {
    const current = this.state.likeArray.slice();
    current[i] = !current[i];
    this.setState({
      likeArray: current,
    })
    localStorage.setItem('likeArray', JSON.stringify(current));
  }

  render() {
    const current = this.state.likeArray;
    var self = this;
    return (
      <React.Fragment>
        <Hero />
        <div className="container">
          <PropertyListingsProvider>
            <PropertyListingsConsumer>
              {function(value) {
                const { allListings } = value;
                return (
                  <div className='columns'>
                    {allListings.map((listing, index) => (
                      <Listing
                        listing={listing}
                        key={index}
                        liked={current[index]}
                        onLike={(i) => self.handleLike(i)}
                        index={index}
                      />
                    ))}
                  </div>
                );
              }}
            </PropertyListingsConsumer>
          </PropertyListingsProvider>
        </div>
      </React.Fragment>
    );
  }
}

export default Home
