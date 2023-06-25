import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

const MapComponent = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }} // Default center coordinates
    />
  ))
);

function LandingPage() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default LandingPage;
