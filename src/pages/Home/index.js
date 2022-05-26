import React from "react";
// import Map from '../../components/GoogleMap';
import Leaflet from "components/Leaflet";

import { Container } from "./styles";

const Home = () => {
    return (
        <Container>
            <Leaflet />
        </Container>
    );
};

export default Home;