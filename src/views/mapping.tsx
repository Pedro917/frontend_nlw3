import React, {useEffect, useState} from 'react';
import '../styles/global.css'
import '../styles/pages/mapping.css'
import MapMarker from '../assets/IMG/markup.svg'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import mapIcon from '../utils/mapicon';
import api from '../services/api';

interface Orphanage{
  id: number
  latitude: number
  longitude: number
  name: string
}

function Mapping() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
      api.get('orphanages').then(response => {
        setOrphanages(response.data);
      });
    }, []);

    return (
      <div id="mapping">
          <aside>
              <header>
              <img src={MapMarker} alt="Logo"/>

              <h2>Escolhar um orfanato no mapa</h2>
              <p>Muitas crianças estão esperando a sua visita :)</p>
              </header>

              <footer>
                <strong>Fortaleza</strong>
                <span>Ceará</span>
              </footer>
          </aside>

          <Map 
            center={[-3.8063507,-38.5135812]}
            zoom={15.75}
            style={{width:'100%',height:'100%'}}
          >
              {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
              <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`} />

              {orphanages.map(orphanage => {
                return (
                  <Marker
                icon={mapIcon}
                position={[orphanage.latitude,orphanage.longitude]}
                key={orphanage.id}
              >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
              </Marker>
                )
              })}

          </Map>

          <Link to="/orphanages/create" className="create-orfanato">
              <FiPlus size={32} color="#fff" />
         
          </Link>
                 
        

      </div>
    );
  }
  
  export default Mapping;