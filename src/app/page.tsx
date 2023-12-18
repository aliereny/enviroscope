"use client";
import { Alert, Drawer, Flex, Select, Skeleton, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AppMap } from "@/ui/organism/app-map/appMap";
import { TurkeyLatLngLiteral } from "@/constants/geospatialData";
import { Analysis, Measurement, Sensor } from "@/types";
import { Marker } from "@react-google-maps/api";
import { CompassTwoTone, DollarTwoTone } from "@ant-design/icons";
import { Locations } from "@/constants/locations";

const AnalysisOptions = [
  {
    value: "25sensor",
    label: "25 Sensors",
  },
  {
    value: "20sensor",
    label: "20 Sensors",
  },
  {
    value: "15sensor",
    label: "15 Sensors",
  },
  {
    value: "10sensor",
    label: "10 Sensors",
  },
  {
    value: "5sensor",
    label: "5 Sensors",
  },
];

function getCircleScaleForLocationId(locationId: string): number {
  const location = Locations.find((location) => location.id === locationId);
  if (!location) {
    return 8;
  }

  return 5 + location.pm25 / 10;
}
export default function AnalysisPage() {
  const [analysisId, setAnalysisId] = useState<string | undefined>(undefined);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [drawerOptions, setDrawerOptions] = useState<{
    measurement: Measurement;
    sensor: Sensor;
  } | null>(null);

  useEffect(() => {
    if (analysisId) {
      fetch(`/api/analysis/${analysisId}`)
        .then((response) => {
          if (response.ok) {
            setError(null);
            return response.json();
          } else {
            response.text().then(setError);
          }
        })
        .then((analysis) => {
          setAnalysis(analysis);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [analysisId]);

  function handleClick(sensor: Sensor, measurement: Measurement) {
    setDrawerOptions({ sensor, measurement });
  }

  return (
    <Flex vertical gap={16} flex={1}>
      <Typography.Title level={1}>Analysis</Typography.Title>
      <Space direction={"vertical"}>
        <Typography.Text>Select an analysis</Typography.Text>
        <Select
          placeholder={"Select an analysis"}
          style={{ width: 200 }}
          options={AnalysisOptions}
          value={analysisId}
          onChange={setAnalysisId}
        />
      </Space>
      {drawerOptions && (
        <Drawer
          title={"Analysis Details"}
          placement={"right"}
          open={true}
          onClose={() => setDrawerOptions(null)}
          width={400}
        >
          <Flex vertical gap={16}>
            <Space direction={"vertical"} style={{ width: "100%" }}>
              <Typography.Text strong>Sensor:</Typography.Text>
              <Typography.Text>{drawerOptions.sensor.id}</Typography.Text>
            </Space>
            <Space direction={"vertical"} style={{ width: "100%" }}>
              <Typography.Text strong>Sensor Location:</Typography.Text>
              <Typography.Text>{`Latitude: ${drawerOptions.sensor.location.lat}, Longitude: ${drawerOptions.sensor.location.lng}`}</Typography.Text>
            </Space>
            <Space direction={"vertical"} style={{ width: "100%" }}>
              <Typography.Text strong>Color:</Typography.Text>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: drawerOptions.sensor.color,
                }}
              />
            </Space>
            <Space direction={"vertical"} style={{ width: "100%" }}>
              <Typography.Text strong>Measurement Name:</Typography.Text>
              <Typography.Text>
                {drawerOptions.measurement.locationId}
              </Typography.Text>
            </Space>
            <Space direction={"vertical"} style={{ width: "100%" }}>
              <Typography.Text strong>Measurement Location:</Typography.Text>
              <Typography.Text>{`Latitude: ${drawerOptions.measurement.location.lat}, Longitude: ${drawerOptions.measurement.location.lng}`}</Typography.Text>
            </Space>
            <Space direction={"vertical"} style={{ width: "100%" }}>
              <Typography.Text strong>Margin:</Typography.Text>
              <Typography.Text>
                {drawerOptions.measurement.margin}
              </Typography.Text>
            </Space>
          </Flex>
        </Drawer>
      )}
      {error && <Alert type={"error"} message={error} />}
      {analysisId && !analysis && !error && <Skeleton active />}
      {analysis && (
        <>
          <Space>
            <DollarTwoTone />
            <Typography.Text strong>
              Total Air Pollution Weighted Transportation Cost:
            </Typography.Text>
            <Typography.Text>
              {analysis.totalAirPollutionWeightedTransportationCost}
            </Typography.Text>
          </Space>
          <Space>
            <CompassTwoTone />
            <Typography.Text strong>Number of Sensors:</Typography.Text>
            <Typography.Text>{analysis.sensors.length}</Typography.Text>
          </Space>
          <div style={{ flex: 1, width: "100%" }}>
            <AppMap center={TurkeyLatLngLiteral}>
              {analysis.sensors
                .map((sensor) =>
                  sensor.measurements.map((measurement) => (
                    <Marker
                      key={`${sensor.id}-${measurement.location}`}
                      position={measurement.location}
                      icon={{
                        path: 0.0,
                        fillColor: sensor.color,
                        fillOpacity: 1,
                        scale: getCircleScaleForLocationId(
                          measurement.locationId,
                        ),
                        strokeWeight: 0,
                        strokeOpacity: 0,
                      }}
                      onClick={() => handleClick(sensor, measurement)}
                    />
                  )),
                )
                .flat()}
            </AppMap>
          </div>
        </>
      )}
    </Flex>
  );
}
