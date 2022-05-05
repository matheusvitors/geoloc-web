import React, { useEffect, useRef, useState } from "react";
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

    return <div ref={ref} style={style} />;
};

export default Map;
