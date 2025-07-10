import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import data from "./data.json";

export default function DashboardPage() {
  return (
    <>
      <ChartAreaInteractive />
      <DataTable data={data} />
    </>
  );
}
