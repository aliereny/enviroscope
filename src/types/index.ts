import LatLngLiteral = google.maps.LatLngLiteral;

export type Measurement = {
  locationId: string;
  location: LatLngLiteral;
  margin: number;
  pollution: number;
};

export type Sensor = {
  id: string;
  color: string;
  location: LatLngLiteral;
  measurements: Measurement[];
};

export type Analysis = {
  analysisId: string;
  totalAirPollutionWeightedTransportationCost: number;
  sensors: Sensor[];
};
