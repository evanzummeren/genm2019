import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import styles from "./index.module.css";

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `45rem` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{ lat: props.location.lat, lng: props.location.lng }}
    defaultOptions={{ disableDefaultUI: true }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.location.lat, lng: props.location.lng }} />}
  </GoogleMap>
)

export default MapComponent
