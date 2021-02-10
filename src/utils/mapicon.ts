import Leaflet from 'leaflet';
import MapIcon from '../assets/IMG/markup.svg'

const mapIcon = Leaflet.icon({
    iconUrl: MapIcon,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
  })

  export default mapIcon;