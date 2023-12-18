import { Locations } from "@/constants/locations";
import * as XLSX from "xlsx";
export interface AQIResponse {
  status: string;
  data: Data;
}

export interface Data {
  aqi: number;
  idx: number;
  attributions: Attribution[];
  city: City;
  dominentpol: string;
  iaqi: Iaqi;
  time: Time;
  forecast: Forecast;
  debug: Debug;
}

export interface Attribution {
  url: string;
  name: string;
  logo?: string;
}

export interface City {
  geo: number[];
  name: string;
  url: string;
  location: string;
}

export interface Iaqi {
  co: Co;
  dew: Dew;
  h: H;
  no2: No2;
  o3: O3;
  p: P;
  pm10: Pm10;
  pm25: Pm25;
  r: R;
  so2: So2;
  t: T;
  w: W;
}

export interface Co {
  v: number;
}

export interface Dew {
  v: number;
}

export interface H {
  v: number;
}

export interface No2 {
  v: number;
}

export interface O3 {
  v: number;
}

export interface P {
  v: number;
}

export interface Pm10 {
  v: number;
}

export interface Pm25 {
  v: number;
}

export interface R {
  v: number;
}

export interface So2 {
  v: number;
}

export interface T {
  v: number;
}

export interface W {
  v: number;
}

export interface Time {
  s: string;
  tz: string;
  v: number;
  iso: string;
}

export interface Forecast {
  daily: Daily;
}

export interface Daily {
  o3: O32[];
  pm10: Pm102[];
  pm25: Pm252[];
}

export interface O32 {
  avg: number;
  day: string;
  max: number;
  min: number;
}

export interface Pm102 {
  avg: number;
  day: string;
  max: number;
  min: number;
}

export interface Pm252 {
  avg: number;
  day: string;
  max: number;
  min: number;
}

export interface Debug {
  sync: string;
}

export async function GET(request: Request) {
  const newData = await Promise.all(
    Locations.map(async (item) => {
      const response = await fetch(
        `https://api.waqi.info/feed/${item.label}/?token=${process.env.WAQI_API_KEY}`,
      );
      const { data } = (await response.json()) as AQIResponse;
      return {
        SensorId: item.id,
        City: item.label,
        AQI: data.aqi,
        Latitude: item.location.lat,
        Longitude: item.location.lng,
      };
    }),
  );

  const excel = XLSX.utils.book_new();
  const sheet = XLSX.utils.json_to_sheet(newData);
  XLSX.utils.book_append_sheet(excel, sheet, "AQI");
  const excelBuffer = XLSX.write(excel, { type: "buffer" });
  const excelBlob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  return new Response(excelBlob, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  });
}
