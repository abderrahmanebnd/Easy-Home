import { BarChart } from "@tremor/react";
import { useState } from "react";
import Buttons from "./Buttons";
import Button from "./Button";
import {
  generateColors,
  getChartCategories,
  validateArray,
} from "../utils/helpers";
import { IoBarChartOutline } from "react-icons/io5";
import { useDataAreaBarCharts } from "../services/useData";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function BarChartAdmin({ route }) {
  const [value, setValue] = useState(null);
  const [timeType, setTimeType] = useState("daily");
  const {
    data: dataChart,
    isLoading,
    refetch,
    error,
  } = useDataAreaBarCharts(route, timeType);

  const categories = getChartCategories(validateArray(dataChart));

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
        <IoBarChartOutline className="text-lg text-primaryColor sm:text-2xl" />
      </div>

      <div className="mb-2 flex h-56 min-w-full items-center justify-center rounded-2xl bg-customGray p-2 md:h-72 md:p-6 lg:h-96">
        {error && <ErrorMessage />}
        {!error && isLoading && <Loader />}
        {!error && !isLoading && (
          // <span>hey</span>
          <BarChart
            className="h-52 md:h-64 lg:h-80"
            data={validateArray(dataChart)}
            index="date"
            categories={categories}
            colors={colors}
            yAxisWidth={25}
            showAnimation
            animationDuration={1000}
            barCategoryGap={"15%"}
            onValueChange={(value) => setValue(value)}
          />
        )}
      </div>
      <Buttons>
        <Button onClick={()=>handleTimeTypeChange("daily")}color="blue">daily</Button>
        <Button onClick={()=>handleTimeTypeChange("monthly")}color="blue">monthly</Button>
        <Button onClick={()=>handleTimeTypeChange("yearly")}color="blue">yearly</Button>
      </Buttons>
    </>
  );
}

export default BarChartAdmin;
