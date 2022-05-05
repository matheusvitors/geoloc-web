import { Wrapper } from "@googlemaps/react-wrapper";
import React from "react";
import Map from '../../components/MapOld';

const Home = () => {
    return (
        <div style={{ display: "flex", height: "100%", width: "100%", background: "black"}} >
            <Wrapper apiKey={process.env.REACT_APP_API_GOOGLE}>
                <Map style={{ display: "flex", height: "100%", background: "black"}} />
            </Wrapper>
        </div>
    );
};

export default Home;