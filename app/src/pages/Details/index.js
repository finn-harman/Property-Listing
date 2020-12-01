import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider';
import PropertyDetails from '../../components/propertyDetails';
import Hero from '../../components/hero';

function Details(props) {
  let { propertyId } = useParams();
  // let { liked, onLike } = props.location.state;
  console.log(props.location.state.liked)
  return (
    <React.Fragment>
      <Hero miniHero />
      <div className="container">
        <Link className="btn btn-primary" to={"/"}>
          Back
        </Link>
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
