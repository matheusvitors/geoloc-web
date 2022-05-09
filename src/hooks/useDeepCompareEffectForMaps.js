
// because React does not do deep comparisons, a custom hook is used
// see discussion in https://github.com/googlemaps/js-samples/issues/946

import { useEffect, useRef } from "react";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";

const google = window.google;

const useDeepCompareMemoize = (value) => {
    const ref = useRef();

    if(!deepCompareEqualsForMaps(value, ref.current)){
        ref.current = value;
    }

}

const deepCompareEqualsForMaps = createCustomEqual(
    deepEqual => (a, b) => {
        if(isLatLngLiteral(a) || a instanceof google.maps.LatLng || 
            isLatLngLiteral(b) || b instanceof google.maps.LatLng
        ) {
            return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
        }

        return deepEqual(a,b);
    }
);


const useDeepCompareEffectForMaps = (callback, dependecies) => {
    useEffect(callback, dependecies.map(useDeepCompareMemoize));
}

export default useDeepCompareEffectForMaps; 