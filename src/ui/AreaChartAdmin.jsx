import { AreaChart } from "@tremor/react";
import { useState } from "react";
import { generateColors, getChartCategories } from "../utils/helpers";
import Buttons from "./Buttons";
import Button from "./Button";
import { RiLineChartLine } from "react-icons/ri";
import { useDataAreaBarCharts } from "../services/useData";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export function AreaChartAdmin({ route }) {
  const [value, setValue] = useState(null);
  const [timeType, setTimeType] = useState("daily");
  const {
    data: dataChart,
    isLoading,
    refetch,
    error,
  } = useDataAreaBarCharts(route, timeType);
  const categories = dataChart ? getChartCategories(dataChart) : [];
  const colors = generateColors(categories.length);
  const handleTimeTypeChange = (newTimeType) => {
    setTimeType(newTimeType);
    refetch();
  };
  return (
    <>
      <div className="mb-3 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Actions Overview
        </h3>
        <RiLineChartLine className="text-lg text-primaryColor sm:text-2xl" />
      </div>
      <div className="mb-2 flex h-56 min-w-full items-center justify-center rounded-2xl bg-customGray p-2 md:h-72 md:p-6 lg:h-96">
        {error && <ErrorMessage />}
        {!error && isLoading && <Loader />}
        {!error && !isLoading && (
          <AreaChart
            className="h-52 md:h-64 lg:h-80"
            data={dataChart}
            index="date"
            categories={categories}
            colors={colors}
            yAxisWidth={30}
            showAnimation
            animationDuration={1000}
            onValueChange={(v) => setValue(v)}
            connectNulls={true}
          />
        )}
      </div>
      <Buttons>
        <Button onChangeTimeType={handleTimeTypeChange}>daily</Button>
        <Button onChangeTimeType={handleTimeTypeChange}>monthly</Button>
        <Button onChangeTimeType={handleTimeTypeChange}>yearly</Button>
      </Buttons>
    </>
  );
}
