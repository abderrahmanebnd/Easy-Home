import { AreaChartAdmin } from "../../ui/AreaChartAdmin";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";
import { MdOutlinePunchClock } from "react-icons/md";

import { TbChartDonut } from "react-icons/tb";
import DonutChartAdmin from "../../ui/DonutChartAdmin";
import TableInfo from "../../ui/TableInfo";
import { useDataAreaBarCharts } from "../../services/useData";
import ErrorMessage from "../../ui/ErrorMessage";
import Loader from "../../ui/Loader";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineComment } from "react-icons/ai";

function Workers() {
  const {
    data: statsData,
    isLoading,
    error,
  } = useDataAreaBarCharts("workers", "total");
  const numCols = statsData ? Object.keys(statsData).length : 0;

  return (
    <div>
      <h2 className="mb-8 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Workers Stats
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
            {" "}
            <Statistic
              color={"blue"}
              text={"Total of Workers"}
              icon={<GrUserWorker />}
              data={statsData?.created}
            />
            <Statistic
              color={"green"}
              text={"Average Review Per Worker"}
              icon={<AiOutlineComment />}
              data={statsData?.averageReviewPerWorker}
            />
            <Statistic
              color={"orange"}
              text={"Average Deal Per Worker"}
              icon={<MdOutlinePunchClock />}
              data={statsData?.averageDealsPerWorker}
            />
          </>
        )}
      </Statistics>

      <AreaChartAdmin route="workers" />

      <div className="mb-1 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Workflow Summary
        </h3>
        <TbChartDonut className="text-lg text-primaryColor sm:text-2xl" />
      </div>

      <section className=" grid grid-cols-1 gap-4 md:grid-cols-3 ">
         <DonutChartAdmin type="GeneralDonutChart" route="workers" />
        <DonutChartAdmin type="job" route="workers" />
        <DonutChartAdmin type="wilaya" route="workers" />
        
      </section>
      <TableInfo />
    </div>
  );
}

export default Workers;
