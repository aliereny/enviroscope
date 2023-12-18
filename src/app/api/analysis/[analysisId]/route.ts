import sensors5 from "@/constants/analysis/5sensor.json";
import sensors10 from "@/constants/analysis/10sensor.json";
import sensors15 from "@/constants/analysis/15sensor.json";
import sensors20 from "@/constants/analysis/20sensor.json";
import sensors25 from "@/constants/analysis/25sensor.json";

import { Analysis } from "@/types";

const table: Record<string, Analysis> = {
  "5sensor": sensors5,
  "10sensor": sensors10,
  "15sensor": sensors15,
  "20sensor": sensors20,
  "25sensor": sensors25,
};

export async function GET(
  request: Request,
  { params }: { params: { analysisId: string } },
) {
  const { analysisId } = params;

  const data = table[analysisId];

  if (!data) {
    return new Response("Analysis not found", { status: 404 });
  }

  return Response.json(data);
}
