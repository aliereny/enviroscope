import * as XLSX from "xlsx";
import { Analysis, Measurement, Sensor } from "@/types";
import { Locations } from "@/constants/locations";
import LatLngLiteral = google.maps.LatLngLiteral;
import distinctColors from "distinct-colors";

function getLocation(locationId: string): LatLngLiteral {
  const location = Locations.find((sensor) => sensor.id === locationId);

  if (!location) {
    throw new Error("Sensor not found");
  }

  return {
    lat: location.latitude,
    lng: location.longitude,
  };
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");
  if (!file || !(file instanceof File)) {
    return new Response("No file found in request", { status: 400 });
  }

  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "buffer" });

  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json<string[]>(worksheet, {
    header: 1,
  });

  let analysis: Analysis = {
    analysisId: file.name.split(".")[0] || "unknown",
    totalAirPollutionWeightedTransportationCost: 0,
    sensors: [],
  };

  const sensorRows = data.filter(
    (row, index) => index > 0 && row[0] === row[1],
  );

  const palette = distinctColors({ count: sensorRows.length });

  analysis.sensors = sensorRows.map(
    (row, index) =>
      ({
        id: row[1],
        measurements: [],
        location: getLocation(row[1]),
        color: palette[index].hex(),
      }) as Sensor,
  );

  data.forEach((row, index) => {
    if (index > 0) {
      const measurement: Measurement = {
        locationId: row[0],
        location: getLocation(row[0]),
        margin: parseFloat(row[3]),
      };

      const sensor = analysis.sensors.find((sensor) => sensor.id === row[1]);

      if (!sensor) {
        throw new Error("Sensor not found");
      }

      sensor.measurements.push(measurement);

      if (row[5]) {
        analysis.totalAirPollutionWeightedTransportationCost += parseFloat(
          row[5],
        );
      }
    }
  });

  return Response.json(analysis);
}