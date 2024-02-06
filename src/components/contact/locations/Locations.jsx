import styles from "./locations.module.css";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const Locations = () => {
  const position = { lat: -34.034584045410156, lng: 151.13418579101562 };
  const positionMelb = { lat: -37.831438690746666, lng: 144.92174922552343 };
  return (
    <APIProvider apiKey={import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div className={styles.locationsSection}>
        <h2 className={styles.locationsTitle}>Our Locations</h2>
        <div className={styles.locationsContainer}>
          <div className={styles.location}>
            <div className={styles.mapContainer}>
              <Map
                zoom={12}
                center={position}
                mapId={import.meta.env.VITE_PUBLIC_MAP_ID}
              >
                <AdvancedMarker position={position}></AdvancedMarker>
              </Map>
            </div>
            <div className={styles.locationContent}>
              <h3 className={styles.locationSubtitle}>Sydney</h3>
              <p className={styles.locationAddress}>
                13 Endeavour Road <br /> Caringbah, NSW 2229
              </p>
            </div>
          </div>
          <div className={styles.location}>
            <div className={styles.mapContainer}>
              <Map
                zoom={12}
                center={positionMelb}
                mapId={import.meta.env.VITE_PUBLIC_MAP_ID}
              >
                <AdvancedMarker position={positionMelb}></AdvancedMarker>
              </Map>
            </div>
            <div className={styles.locationContent}>
              <h3 className={styles.locationSubtitle}>Melbourne</h3>
              <p className={styles.locationAddress}>
                3-5 Rocklea Drive
                <br />
                Port Melbourne, VIC 3207
              </p>
            </div>
          </div>
        </div>
      </div>
    </APIProvider>
  );
};

export default Locations;
