"use client";
import { Drawer, Flex, List, Typography } from "antd";
import { AppMap } from "@/ui/organism/app-map/appMap";
import { TurkeyLatLngLiteral } from "@/constants/geospatialData";
import { useState } from "react";
import { Marker } from "@react-google-maps/api";

export interface OWMResponse {
  coord: Coord;
  list: List[];
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface List {
  main: Main;
  components: Components;
  dt: number;
}

export interface Main {
  aqi: number;
}

export interface Components {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}

interface AQIItem {
  title: string;
  description: string;
}

const aqiInterpretation: Record<number, string> = {
  1: "Good",
  2: "Fair",
  3: "Moderate",
  4: "Poor",
  5: "Very Poor",
};

export default function LivePage() {
  const [data, setData] = useState<AQIItem[] | null>(null);
  const [latLng, setLatLng] = useState<google.maps.LatLngLiteral | null>(null);

  const handleMapClick = async (event: google.maps.MapMouseEvent) => {
    const { latLng } = event;
    if (!latLng) return;

    setLatLng(latLng.toJSON());
    fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latLng.lat()}&lon=${latLng.lng()}&appid=${
        process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY
      }`,
    )
      .then((response) => response.json())
      .then((data: OWMResponse) => {
        const items: AQIItem[] = [];
        items.push({
          title: "AQI",
          description: `${data.list[0].main.aqi} - ${
            aqiInterpretation[data.list[0].main.aqi]
          }`,
        });
        items.push({
          title: "CO",
          description: `${data.list[0].components.co} μg/m³`,
        });
        items.push({
          title: "NO",
          description: `${data.list[0].components.no} μg/m³`,
        });
        items.push({
          title: "NO2",
          description: `${data.list[0].components.no2} μg/m³`,
        });
        items.push({
          title: "O3",
          description: `${data.list[0].components.o3} μg/m³`,
        });
        items.push({
          title: "SO2",
          description: `${data.list[0].components.so2} μg/m³`,
        });
        items.push({
          title: "PM2.5",
          description: `${data.list[0].components.pm2_5} μg/m³`,
        });
        items.push({
          title: "PM10",
          description: `${data.list[0].components.pm10} μg/m³`,
        });
        items.push({
          title: "NH3",
          description: `${data.list[0].components.nh3} μg/m³`,
        });
        setData(items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Flex vertical style={{ width: "100%" }}>
      <Typography.Title level={1}>Live</Typography.Title>
      <AppMap center={TurkeyLatLngLiteral} onClick={handleMapClick}>
        {latLng && <Marker position={latLng} />}
      </AppMap>
      {data && (
        <Drawer
          title="Air Quality Index"
          placement="right"
          closable
          onClose={() => {
            setData(null);
            setLatLng(null);
          }}
          width={400}
          open
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            size={"small"}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Drawer>
      )}
    </Flex>
  );
}
