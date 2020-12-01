import React from 'react';
import Hero from '../../components/hero';
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider';
import Listing from '../../components/listing';

class Home extends React.Component {

  setLikeStatus(id) {
    const likeStatus = localStorage.getItem(`${id}`)
    if (!likeStatus) {
      localStorage.setItem(`${id}`, JSON.stringify(false));
    }
  }

  render() {
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
                    {allListings.map((listing) => (
                      self.setLikeStatus(listing.address),
                      <Listing
                        listing={listing}
                        key={listing.address}
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
