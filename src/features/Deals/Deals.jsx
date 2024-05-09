import { MdOutlinePunchClock } from "react-icons/md";
import BarChartAdmin from "../../ui/BarChartAdmin";

import DonutChartAdmin from "../../ui/DonutChartAdmin";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";
import { LuUsers2 } from "react-icons/lu";

import { TbChartDonut } from "react-icons/tb";
import { useDataAreaBarCharts } from "../../services/useData";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import { GrUserWorker } from "react-icons/gr";

function Deals() {
  const {
    data: statsData,
    isLoading,
    error,
  } = useDataAreaBarCharts("deals", "total");
  const numCols = statsData ? Object.keys(statsData).length : 0;
  return (
    <div>
      <h2 className="mb-8 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Deals Stats
      </h2>

      <Statistics numCols={numCols}>
        {error && <ErrorMessage />}
        {!error && isLoading && (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        )}
        {!error && !isLoading && (
          <>
            <Statistic
              color={"blue"}
              text={"Total of Deals"}
              icon={<MdOutlinePunchClock />}
              data={statsData?.created}
            />
            <Statistic
              color={"green"}
              text={"Average Deal Per User"}
              icon={<LuUsers2 />}
              data={statsData?.averageDealPerUser}
            />

            <Statistic
              color={"orange"}
              text={"Average Deal Per Worker"}
              icon={<GrUserWorker />}
              data={statsData?.averageDealPerWorker}
            />
          </>
        )}
      </Statistics>

      <BarChartAdmin route="deals" />

      <div className="mb-3 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Workflow Summary
        </h3>
        <TbChartDonut className="text-lg text-primaryColor sm:text-2xl" />
      </div>

      <DonutChartAdmin type="GeneralDonutChart" route="deals" />
    </div>
  );
}

export default Deals;
