import React, { useEffect, useState } from "react";
// import Map from '../../components/GoogleMap';
import Leaflet from "components/Leaflet";
import { useParams } from "react-router-dom";

import { Container } from "./styles";
import { Service } from "core/service";

const Home = () => {

    const { id } = useParams();
    const [rota, setRota] = useState();

    // console.log(id);

    useEffect(() => {
        document.title = "Geoloc - Mapa"
        getRota();
    }, [])

    const getRota = async () => {
        const response = await Service.pegarRota(id);
        setRota(response.data.rota.coordenadas)
    }

    useEffect(() => {
        console.log(rota);
    }, [rota])
    
    

    return (
        <Container>
            <Leaflet rota={rota} />
        </Container>
    );
};

export default Home;