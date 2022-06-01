import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Leaflet = ({ rota }) => {
	// const position = [37.4218849, -122.0840619];
	const position = [-15.8010596434, -47.8800594807];

	const [coordenadas, setCoordenadas] = useState();
	
	useEffect(() => {
		setCoordenadas(rota)
	}, [rota])
	
	console.log(coordenadas);

	return (
		<MapContainer
			center={position}
			zoom={15}
			scrollWheelZoom={false}
			style={{ height: "98vh" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{ coordenadas && coordenadas.map((coord, index) => <Marker key={index} position={[coord.latitude, coord.longitude]}><Popup>ID: {coord.id}</Popup></Marker> ) }
			{/* <Marker position={position} /> */}
		</MapContainer>
	);
};

export default Leaflet;
