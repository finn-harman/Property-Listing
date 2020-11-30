import React from 'react';
import Hero from '../../components/hero';
import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider';
import Listing from '../../components/listing';

function Home() {
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
                  {allListings.map(listing => (
                    <Listing listing={listing} key={listing.address} />
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

export default Home
