import React from 'react'
import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';
import {GeoJsonLayer, ArcLayer} from '@deck.gl/layers';

const Goog = () => {
    return (
        <div>
             <div id="map"></div>
        </div>
    )
}

export default Goog
