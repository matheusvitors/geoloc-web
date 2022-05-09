import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import useDeepCompareEffectForMaps from "../../hooks/useDeepCompareEffectForMaps";

export const Map = ({ onClick, onIdle, children, style, ...options }) => {
    const ref = useRef(null);
    const [map, setMap] = useState();


    useEffect(() => {
        if(ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    return (
        <Wrapper  apiKey={process.env.REACT_APP_API_GOOGLE}>
            <div ref={ref} style={style} />
        </Wrapper>
    );
};

export default Map;
