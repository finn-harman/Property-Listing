import React from 'react';
import { useParams } from 'react-router-dom';

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider';
import PropertyDetails from '../../components/propertyDetails';
import Hero from '../../components/hero';

function Details() {
  let { propertyId } = useParams();

  return (
    <React.Fragment>
      <Hero miniHero />
      <div className="container">
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ getListingByPropertyId }) => (
              <PropertyDetails listing={getListingByPropertyId(propertyId)} />
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </React.Fragment>
  );
}

export default Details
