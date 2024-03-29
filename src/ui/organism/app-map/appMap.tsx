"use client";
import {
  GoogleMap,
  GoogleMapProps,
  LoadScriptNext,
} from "@react-google-maps/api";
import { CSSProperties } from "react";

interface AppMapProps extends GoogleMapProps {
  children?: React.ReactNode;
  center: google.maps.LatLngLiteral;
}

const containerStyle: CSSProperties = {
  width: "100%",
  height: "100%",
};

export const AppMap: React.FC<AppMapProps> = (props) => {
  const { children, center, ...rest } = props;

  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
        {...rest}
      >
        {children}
      </GoogleMap>
    </LoadScriptNext>
  );
};
