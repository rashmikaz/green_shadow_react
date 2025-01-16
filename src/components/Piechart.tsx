import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Tooltip } from "recharts";

const chartData = [
  { browser: "chrome", visitors: 275, fill: " #4285f4" },
  { browser: "safari", visitors: 200, fill: " #1d8e3e" },
  { browser: "firefox", visitors: 187, fill: " #ff7139" },
  { browser: "edge", visitors: 173, fill: " #0078d4" },
  { browser: "other", visitors: 90, fill: " #9e9e9e" },
];

const chartConfig = {
@@ -40,21 +40,29 @@ export function Piechart() {
    <>
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Other content */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full">
            <div className="flex flex-col">
              <div className="items-center pb-0 mb-4">
                <h2 className="text-2xl font-semibold">
                  Field-Staff Assignment
                </h2>
                <p className="text-sm text-gray-600">January - June 2024</p>
              </div>
              <div className="flex-1 pb-0 mx-auto aspect-square max-w-[700px] max-h-[400px] px-0">
                <PieChart width={400} height={400}>
                  {/* Tooltip from recharts */}
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      padding: "10px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                    itemStyle={{ color: "black" }}
                    formatter={(value, name, props) => {
                      return [`${value} visitors`, name];
                    }}
                  />
                  <Pie
                    data={chartData}
@@ -76,16 +84,17 @@ export function Piechart() {
                      );
                    }}
                    nameKey="browser"
                    outerRadius={180}
                  />
                </PieChart>
              </div>
              <div className="flex-col gap-2 text-sm mt-4">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Staff assignment up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing total staff assignment for the last 6 months
                </div>
              </div>
            </div>