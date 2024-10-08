import { DonutChart, Legend } from "@tremor/react";
import { useState } from "react";
import {
  generateColors,
  getDonutChartCategories,
  validateArray,
} from "../utils/helpers";
import { useDataAreaBarCharts } from "../services/useData";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function DonutChartAdmin({ type, route,children }) {
  const [value, setvalue] = useState(null);

  const {
    data: dataDonutChart,
    isLoading,
    error,
  } = useDataAreaBarCharts(route, type);

  const categories = getDonutChartCategories(validateArray(dataDonutChart));

  const colors = generateColors(categories.length);

  return (
    <div className=" flex flex-col items-center justify-center  gap-y-3  rounded-2xl bg-customGray p-4  md:py-6  lg:px-6">
      <p className="text-primaryColor mb-2 text-xl lg:text-2xl">{children}</p>
      {error && <ErrorMessage />}
      {!error && isLoading && <Loader />}
      {!error && !isLoading && (
        <>
          <DonutChart
            data={dataDonutChart}
            category="count"
            index="_id"
            colors={colors}
            variant="donut"
            showAnimation
            animationDuration={1000}
            onValueChange={(value) => setvalue(value)}
          />
          <Legend categories={categories} colors={colors} />
        </>
      )}
    </div>
  );
}

export default DonutChartAdmin;
