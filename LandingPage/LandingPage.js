import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import { Typography, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  mapContainer: {
    height: '80%',
    width: '80%',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
  },
}));

const MapComponent = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }} // Default center coordinates
    />
  ))
);

function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container className={classes.mapContainer}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to the Google Maps App!
        </Typography>
        <MapComponent
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`} // Replace YOUR_API_KEY with your actual API key
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </Container>
    </div>
  );
}

export default LandingPage;