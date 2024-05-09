import { MdOutlineWorkOutline } from "react-icons/md";
import BarChartAdmin from "../../ui/BarChartAdmin";

import DonutChartAdmin from "../../ui/DonutChartAdmin";
import Statistic from "../../ui/Statistic";
import Statistics from "../../ui/Statistics";

import { TbChartDonut } from "react-icons/tb";
import { useDataAreaBarCharts } from "../../services/useData";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import { GrUserWorker } from "react-icons/gr";

function Applications() {
  const {
    data: statsData,
    isLoading,
    error,
  } = useDataAreaBarCharts("applications", "total");
  const numCols = statsData ? Object.keys(statsData).length : 0;

  return (
    <div>
      <h2 className="mb-8 text-xl  font-semibold text-primaryColor sm:text-3xl">
        Applications Stats
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
              text={"Total of Applications"}
              icon={<MdOutlineWorkOutline />}
              data={statsData?.created}
            />
            <Statistic
              color={"green"}
              text={"Average Application Per Worker"}
              icon={<GrUserWorker />}
              data={statsData?.averageApplicationsPerWorker}
            />
          </>
        )}
      </Statistics>

      <BarChartAdmin route="applications" />

      <div className="mb-3 flex items-center gap-3">
        <h3 className="  text-lg text-primaryColor sm:text-2xl">
          Workflow Summary
        </h3>
        <TbChartDonut className="text-lg text-primaryColor sm:text-2xl" />
      </div>
      <section className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <DonutChartAdmin type="GeneralDonutChart" route="applications" />
        <DonutChartAdmin
          type="applicationPerJobCategory"
          route="applications"
        />
      </section>
    </div>
  );
}

export default Applications;
