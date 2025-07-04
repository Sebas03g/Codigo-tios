import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Mapa({ punto, setPunto }) {

  const MarkerHandler = () => {
    useMapEvents({
      click(e) {
        setPunto({ lat: e.latlng.lat, lng: e.latlng.lng });
      },
    });
    return null;
  };

  return (
    <MapContainer center={[punto.lat, punto.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[punto.lat, punto.lng]}>
        <Popup>
          Aquí está tu ubicación.
        </Popup>
      </Marker>
      <MarkerHandler />
    </MapContainer>
  );
}
